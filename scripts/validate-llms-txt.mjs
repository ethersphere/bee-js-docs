// Validate static/llms.txt against the actual docs directory.
// Reports stale links (URLs pointing to non-existent pages) and
// missing coverage (doc pages not listed in llms.txt).
// Exits 0 — warnings only, does not block the build.

import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DOCS_DIR = join(ROOT, 'docs');
const LLMS_TXT = join(ROOT, 'static', 'llms.txt');
const BASE_URL = 'https://bee-js.ethswarm.org/docs/';

/** Recursively find all .md/.mdx files under `dir`. */
function findDocFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findDocFiles(full));
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

/** Read slug, id, or filename from a doc file to determine its URL path segment. */
function getUrlPathSegment(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fm) {
    const slugMatch = fm[1].match(/^slug:\s*(.+)$/m);
    if (slugMatch) {
      const slug = slugMatch[1].trim().replace(/^\//, '');
      // slug "/" (root) → empty string, caller filters these out
      return slug;
    }
    const idMatch = fm[1].match(/^id:\s*(.+)$/m);
    if (idMatch) return idMatch[1].trim();
  }
  return basename(filePath, extname(filePath));
}

/** Extract all bee-js.ethswarm.org/docs/... paths from llms.txt. */
function extractDocPaths(file) {
  const content = readFileSync(file, 'utf-8');
  const escaped = BASE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`${escaped}([^)\\s/]+)`, 'g');
  const paths = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    paths.push(m[1]);
  }
  return paths;
}

// ── Main ────────────────────────────────────────────────────────────

const docFiles = findDocFiles(DOCS_DIR);
// Exclude auto-generated API docs and root-slug pages (slug: /) from coverage check
const manualDocFiles = docFiles.filter(f => !f.replace(/\\/g, '/').includes('/docs/api/'));
const docPathSet = new Set(
  manualDocFiles.map(getUrlPathSegment).filter(p => p !== '')
);

const llmsPaths = extractDocPaths(LLMS_TXT);
const llmsPathSet = new Set(llmsPaths);

let warnings = 0;

// 1. Stale links — URL in llms.txt but no matching doc file
for (const p of llmsPaths) {
  if (!docPathSet.has(p)) {
    console.warn(`  ⚠  Stale link in llms.txt: ${BASE_URL}${p}`);
    warnings++;
  }
}

// 2. Missing coverage — doc file exists but not in llms.txt
for (const p of docPathSet) {
  if (!llmsPathSet.has(p)) {
    console.warn(`  ⚠  Missing from llms.txt: ${BASE_URL}${p}`);
    warnings++;
  }
}

if (warnings > 0) {
  console.log(`llms.txt validation: ${warnings} warning(s)`);
} else {
  console.log('llms.txt validation: all links verified, full coverage ✓');
}
