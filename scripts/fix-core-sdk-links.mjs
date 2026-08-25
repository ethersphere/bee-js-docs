// Rewrite the "Defined in:" lines in docs/api that typedoc emits as bare
// node_modules paths into real links to the core-sdk repository.
//
// Symbols that bee-js re-exports from @ethersphere/core-sdk are resolved by
// typedoc to the installed .d.cts declarations, so it emits plain text like
//
//   Defined in: bee-js/node\_modules/@ethersphere/core-sdk/dist/bytes/bytes.d.cts:65
//
// instead of a link. The declaration line numbers do not match the TypeScript
// sources, but the package ships .d.cts.map source maps next to them, so the
// true source location can be recovered and linked like every other entry:
//
//   Defined in: [core-sdk/src/bytes/bytes.ts:166](https://github.com/.../src/bytes/bytes.ts#L166)
//
// Run this after regenerating docs/api. It is idempotent.
//
//   node scripts/fix-core-sdk-links.mjs           rewrite in place
//   node scripts/fix-core-sdk-links.mjs --check   report only, exit 1 if any remain

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const API_DIR = join(ROOT, 'docs', 'api');
// The core-sdk copy installed under the bee-js clone the API docs were generated from.
const SDK_DIR = join(ROOT, 'sources', 'bee-js', 'node_modules', '@ethersphere', 'core-sdk');
const SDK_REPO = join(ROOT, 'sources', 'core-sdk');
const REPO_URL = 'https://github.com/ethersphere/core-sdk';

const CHECK_ONLY = process.argv.includes('--check');

// Matches the bare text typedoc emits. The underscore is markdown-escaped.
const DEFINED_IN =
  /Defined in: bee-js\/node\\_modules\/@ethersphere\/core-sdk\/dist\/(\S+?)\.d\.cts:(\d+)/g;

// ── Source maps ─────────────────────────────────────────────────────

const BASE64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/** Decode one base64 VLQ-encoded source map segment into its signed fields. */
function decodeVlq(segment) {
  const fields = [];
  let value = 0;
  let shift = 0;
  for (const char of segment) {
    const digit = BASE64.indexOf(char);
    if (digit < 0) throw new Error(`Invalid base64 VLQ character: ${char}`);
    value += (digit & 31) << shift;
    if (digit & 32) {
      shift += 5;
      continue;
    }
    const negative = value & 1;
    value >>= 1;
    fields.push(negative ? -value : value);
    value = 0;
    shift = 0;
  }
  return fields;
}

const mapCache = new Map();

/**
 * For a dist-relative module path (e.g. "bytes/bytes"), return an array indexed
 * by 1-based declaration line holding the source location it maps back to.
 */
function loadSourceMap(modulePath) {
  if (mapCache.has(modulePath)) return mapCache.get(modulePath);

  const mapFile = join(SDK_DIR, 'dist', `${modulePath}.d.cts.map`);
  if (!existsSync(mapFile)) {
    throw new Error(`Missing source map: ${mapFile}`);
  }
  const map = JSON.parse(readFileSync(mapFile, 'utf-8'));

  // Source map fields are deltas accumulated across the whole mappings string;
  // only the generated column resets per line.
  const byLine = [];
  let sourceIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;

  map.mappings.split(';').forEach((lineMappings, index) => {
    if (!lineMappings) return;
    for (const segment of lineMappings.split(',')) {
      if (!segment) continue;
      const fields = decodeVlq(segment);
      if (fields.length < 4) continue; // generated column only, no source location
      sourceIndex += fields[1];
      sourceLine += fields[2];
      sourceColumn += fields[3];
      // The first mapped segment on a line is the declaration itself.
      byLine[index + 1] ??= { source: map.sources[sourceIndex], line: sourceLine + 1 };
    }
  });

  mapCache.set(modulePath, byLine);
  return byLine;
}

// ── Repository revision ─────────────────────────────────────────────

/**
 * Pin links to the core-sdk release matching the installed package. Prefers the
 * tag's commit sha (matching how bee-js links are pinned) and falls back to the
 * tag name when the core-sdk clone is not available.
 */
function resolveRevision() {
  const { version } = JSON.parse(readFileSync(join(SDK_DIR, 'package.json'), 'utf-8'));
  const tag = `core-sdk-v${version}`;
  try {
    return execFileSync('git', ['-C', SDK_REPO, 'rev-parse', `${tag}^{commit}`], {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    console.warn(`  ⚠  Could not resolve ${tag} in ${SDK_REPO}, linking to the tag instead`);
    return tag;
  }
}

// ── Rewriting ───────────────────────────────────────────────────────

/** Recursively find all .md files under `dir`. */
function findDocFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findDocFiles(full));
    } else if (entry.name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

const stale = [];
for (const file of findDocFiles(API_DIR)) {
  DEFINED_IN.lastIndex = 0; // the regex is global; reset it between files
  if (DEFINED_IN.test(readFileSync(file, 'utf-8'))) stale.push(file);
}

// Checking only has to spot the bare paths, so it works without the sources/ clones.
if (CHECK_ONLY) {
  if (stale.length === 0) {
    console.log('core-sdk links: all references linked ✓');
    process.exit(0);
  }
  for (const file of stale) {
    console.error(`  ⚠  Unlinked core-sdk references: ${relative(ROOT, file)}`);
  }
  console.error(`core-sdk links: ${stale.length} file(s) need "npm run fix-api-links"`);
  process.exit(1);
}

const revision = resolveRevision();
let linkCount = 0;

for (const file of stale) {
  const original = readFileSync(file, 'utf-8');
  const rewritten = original.replace(DEFINED_IN, (match, modulePath, declLine) => {
    const location = loadSourceMap(modulePath)[Number(declLine)];
    if (!location) {
      console.warn(`  ⚠  No source mapping for ${modulePath}.d.cts:${declLine}`);
      return match;
    }
    // `sources` entries are relative to the map file, i.e. to dist/<dir>.
    const sourcePath = posix
      .normalize(posix.join('dist', posix.dirname(modulePath), location.source))
      .replace(/^dist\//, '');
    linkCount++;
    return (
      `Defined in: [core-sdk/${sourcePath}:${location.line}]` +
      `(${REPO_URL}/blob/${revision}/${sourcePath}#L${location.line})`
    );
  });

  if (rewritten !== original) writeFileSync(file, rewritten);
}

if (linkCount > 0) {
  console.log(`core-sdk links: rewrote ${linkCount} reference(s) in ${stale.length} file(s)`);
} else {
  console.log('core-sdk links: nothing to rewrite ✓');
}
