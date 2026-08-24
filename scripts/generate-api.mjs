// Regenerate the API reference under docs/api from the bee-js sources.
//
// docs/api is typedoc output that is committed to this repository, so the site
// builds without a bee-js checkout. This script is the whole recipe: it runs
// typedoc (see typedoc.config.mjs) and then reshapes the output into the layout
// the site expects, which typedoc cannot produce on its own.
//
// Requires the reference clones described in CLAUDE.md:
//
//   sources/bee-js    with its dependencies installed (npm install)
//   sources/core-sdk  used to resolve the core-sdk links
//
// Both are read at their current checkout, so check out the release you are
// documenting before running this.
//
//   npm run generate-api
//
// The typedoc and typedoc-plugin-markdown versions are pinned exactly in
// package.json: the output is compared against what is already committed, and a
// plugin upgrade rewrites unrelated pages. Upgrade them deliberately, on their own.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const API_DIR = join(ROOT, 'docs', 'api');

// typedoc renders the project index as a README, and nests the one namespace it
// finds under a directory named after the package.
const PACKAGE_DIR = join(API_DIR, '@ethersphere');
const RAW_UTILS_DIR = join(PACKAGE_DIR, 'namespaces', 'Utils');
const UTILS_DIR = join(API_DIR, 'namespaces', 'Utils');

const OVERVIEW_FRONTMATTER = ['id: Overview', 'title: Overview', 'slug: /api/', 'sidebar_position: 0'];

// Hand-written: typedoc has no way to know that the classes behind the Bee
// namespaces are missing. They live in src/modules/*.ts, are not exported from
// src/index.ts, and cannot be added as entry points because their names collide
// with exported types (Data, Tag, Pin, Collection, Cheque, Chunk). They are
// documented by hand in docs/documentation/overview.md instead.
const OVERVIEW_ADMONITION = `:::info Namespace methods
This reference covers everything \`@ethersphere/bee-js\` exports. The classes behind \`bee.data\`, \`bee.file\`, \`bee.stamp\` and the other [namespaces](../documentation/overview.md#namespaces) are internal to the library and have no page of their own here. The [SDK Overview](../documentation/overview.md#bee-api) lists every namespaced method together with the Bee endpoint it calls.
:::`;

function* markdownFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* markdownFiles(path);
    else if (entry.name.endsWith('.md')) yield path;
  }
}

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

// ── Preconditions ───────────────────────────────────────────────────

if (!existsSync(join(ROOT, 'sources', 'bee-js', 'src', 'index.ts'))) {
  fail('sources/bee-js is missing. Clone https://github.com/ethersphere/bee-js into sources/.');
}
if (!existsSync(join(ROOT, 'sources', 'bee-js', 'node_modules'))) {
  fail('sources/bee-js has no dependencies installed. Run npm install in that clone.');
}
if (!existsSync(join(ROOT, 'sources', 'core-sdk'))) {
  fail('sources/core-sdk is missing. Clone https://github.com/ethersphere/core-sdk into sources/.');
}

// ── Generate ────────────────────────────────────────────────────────

console.log('Running typedoc…');
execFileSync(process.execPath, [join(ROOT, 'node_modules', 'typedoc', 'bin', 'typedoc'), '--options', join(ROOT, 'typedoc.config.mjs')], {
  cwd: ROOT,
  stdio: 'inherit',
});

// ── Flatten the Utils namespace ─────────────────────────────────────

// The namespace pages are the only ones typedoc buries under a package
// directory and a `functions` directory. Lifting them to namespaces/Utils
// keeps the URLs short and the sidebar flat, which costs two directory levels
// off every relative link they contain.
const functionsDir = join(RAW_UTILS_DIR, 'functions');
if (!existsSync(functionsDir)) {
  fail(`Expected the Utils namespace at ${relative(ROOT, functionsDir)}. Has the typedoc layout changed?`);
}

mkdirSync(UTILS_DIR, { recursive: true });
const utilsPages = readdirSync(functionsDir).filter(name => name.endsWith('.md')).sort();

for (const name of utilsPages) {
  const source = join(functionsDir, name);
  const content = readFileSync(source, 'utf-8').replace(/\]\(((?:\.\.\/)+)/g, (_match, ups) => {
    const levels = ups.length / '../'.length;
    return `](${'../'.repeat(Math.max(levels - 2, 0))}`;
  });
  writeFileSync(join(UTILS_DIR, name), content);
  rmSync(source);
}

// The namespace's own index page is dropped: the sidebar links straight to the
// function pages, so nothing points at it.
rmSync(PACKAGE_DIR, { recursive: true, force: true });
console.log(`Moved ${utilsPages.length} Utils page(s) to ${relative(ROOT, UTILS_DIR)}`);

// ── Turn the index into Overview.md ─────────────────────────────────

const readme = join(API_DIR, 'README.md');
if (!existsSync(readme)) fail('typedoc produced no README.md to turn into Overview.md.');

const overview = readFileSync(readme, 'utf-8')
  .replace(/^# .*\n+/, '') // the package name is what the frontmatter title replaces
  .replace(/^- \[Utils\]\(.*\)$/m, `- [Utils](./namespaces/Utils/${utilsPages[0].replace(/\.md$/, '')}.md)`);

writeFileSync(join(API_DIR, 'Overview.md'), `---\n${OVERVIEW_FRONTMATTER.join('\n')}\n---\n\n${OVERVIEW_ADMONITION}\n\n${overview}`);
rmSync(readme);
console.log('Wrote docs/api/Overview.md');

// ── Normalise the TypeScript lib references ─────────────────────────

// Members inherited from Error, Uint8Array and friends are defined in
// TypeScript's own lib.*.d.ts, which typedoc reports as a path into whichever
// node_modules/typescript it happened to resolve. That path says nothing to a
// reader and moves with the machine, so it is reduced to the lib file itself.
const LIB_REFERENCE = /Defined in: \S*node\\?_modules\/typescript\/lib\//g;

let normalised = 0;
for (const file of markdownFiles(API_DIR)) {
  const content = readFileSync(file, 'utf-8');
  const rewritten = content.replace(LIB_REFERENCE, () => {
    normalised++;
    return 'Defined in: typescript/lib/';
  });
  if (rewritten !== content) writeFileSync(file, rewritten);
}
console.log(`Normalised ${normalised} TypeScript lib reference(s)`);

// ── Link the core-sdk re-exports ────────────────────────────────────

execFileSync(process.execPath, [join(__dirname, 'fix-core-sdk-links.mjs')], { cwd: ROOT, stdio: 'inherit' });

console.log('\nAPI reference regenerated. Review the diff before committing.');
