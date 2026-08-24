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
import { existsSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const API_DIR = join(ROOT, 'docs', 'api');

// typedoc renders one module per entry point, nested under a directory named
// after that entry point's path. The main entry point's pages therefore arrive
// under bee-js/src, and each namespace class under bee-js/src/modules/<name>.
const ENTRY_DIR = join(API_DIR, 'bee-js', 'src');
const MODULES_DIR = join(API_DIR, 'modules');
const CLASSES_DIR = join(API_DIR, 'classes');
const UTILS_DIR = join(API_DIR, 'namespaces', 'Utils');

/**
 * Rewrite the `../` prefixes of a page's relative links after the page moves
 * `levels` closer to docs/api.
 */
function liftLinks(content, levels) {
  return content.replace(/\]\(((?:\.\.\/)+)/g, (_match, ups) => {
    const depth = ups.length / '../'.length;
    return `](${'../'.repeat(Math.max(depth - levels, 0))}`;
  });
}

const OVERVIEW_FRONTMATTER = ['id: Overview', 'title: Overview', 'slug: /api/', 'sidebar_position: 0'];

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

// ── Lift the main entry point to the top ────────────────────────────

// Everything the site publishes lives under the bee-js/src module directory,
// so the whole subtree moves up to docs/api. Because it moves as one piece, the
// relative links inside it stay correct without any rewriting.
if (!existsSync(ENTRY_DIR)) {
  fail(`Expected the main entry point at ${relative(ROOT, ENTRY_DIR)}. Has the typedoc layout changed?`);
}

// The index typedoc writes at the top is the list of entry points, which is a
// list of source paths and of no use to a reader. The index worth keeping is
// the one inside the entry point directory, and it takes this name.
rmSync(join(API_DIR, 'README.md'), { force: true });

for (const entry of readdirSync(ENTRY_DIR)) {
  renameSync(join(ENTRY_DIR, entry), join(API_DIR, entry));
}
rmSync(join(API_DIR, 'bee-js'), { recursive: true, force: true });

// ── Flatten the Utils namespace ─────────────────────────────────────

// Utils is the one namespace typedoc buries under a `functions` directory.
// Lifting its pages to namespaces/Utils keeps the URLs short and the sidebar
// flat, which costs one directory level off every relative link they contain.
const functionsDir = join(UTILS_DIR, 'functions');
if (!existsSync(functionsDir)) {
  fail(`Expected the Utils namespace at ${relative(ROOT, functionsDir)}. Has the typedoc layout changed?`);
}

const utilsPages = readdirSync(functionsDir).filter(name => name.endsWith('.md')).sort();

for (const name of utilsPages) {
  const source = join(functionsDir, name);
  writeFileSync(join(UTILS_DIR, name), liftLinks(readFileSync(source, 'utf-8'), 1));
  rmSync(source);
}

// The namespace's own index page is dropped: the sidebar links straight to the
// function pages, so nothing points at it.
rmSync(functionsDir, { recursive: true, force: true });
rmSync(join(UTILS_DIR, 'README.md'), { force: true });
console.log(`Moved ${utilsPages.length} Utils page(s) to ${relative(ROOT, UTILS_DIR)}`);

// ── Flatten the namespace classes ───────────────────────────────────

// Each namespace class is its own entry point, so each one arrives alone in a
// modules/<name>/classes directory. They are classes like any other, so they
// join the rest in docs/api/classes — two directory levels shallower — and the
// sidebar picks them up with no configuration of its own. None of their names
// collide with a page already there.
if (!existsSync(MODULES_DIR)) {
  fail(`Expected the namespace classes under ${relative(ROOT, MODULES_DIR)}. Has the typedoc layout changed?`);
}

const namespaceClasses = [];

for (const moduleName of readdirSync(MODULES_DIR).sort()) {
  const classesDir = join(MODULES_DIR, moduleName, 'classes');
  if (!existsSync(classesDir)) {
    fail(`The ${moduleName} module produced no class page. Is src/modules/${moduleName}.ts still a namespace class?`);
  }

  for (const name of readdirSync(classesDir).filter(entry => entry.endsWith('.md'))) {
    writeFileSync(join(CLASSES_DIR, name), liftLinks(readFileSync(join(classesDir, name), 'utf-8'), 2));
    namespaceClasses.push(name.replace(/\.md$/, ''));
  }
}

// The per-module index pages go with the directory: each held a single link to
// a class page that now sits next to the other classes.
rmSync(MODULES_DIR, { recursive: true, force: true });

// Bee.md is the only page that links into the layout just dismantled — it is
// where the namespaces are reachable from, one property per class.
const beePage = join(CLASSES_DIR, 'Bee.md');
const beeLinked = readFileSync(beePage, 'utf-8').replace(/\]\(\.\.\/modules\/[^/]+\/classes\/([^/)]+\.md)\)/g, ']($1)');
writeFileSync(beePage, beeLinked);
console.log(`Moved ${namespaceClasses.length} namespace class page(s) to ${relative(ROOT, CLASSES_DIR)}`);

// ── Turn the index into Overview.md ─────────────────────────────────

const readme = join(API_DIR, 'README.md');
if (!existsSync(readme)) fail('typedoc produced no README.md to turn into Overview.md.');

// The namespace classes came from entry points of their own, so this index has
// never heard of them. They are folded into the class list it already carries,
// in the same case-insensitive order typedoc sorts it by.
function withNamespaceClasses(index) {
  return index.replace(/(## Classes\n\n)((?:- .*\n)+)/, (_match, heading, list) => {
    const entries = [...list.trimEnd().split('\n'), ...namespaceClasses.map(name => `- [${name}](classes/${name}.md)`)];
    entries.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    return `${heading}${entries.join('\n')}\n`;
  });
}

const overview = withNamespaceClasses(
  readFileSync(readme, 'utf-8')
    .replace(/^# .*\n+/, '') // the entry point path is what the frontmatter title replaces
    .replace(/^- \[Utils\]\(.*\)$/m, `- [Utils](./namespaces/Utils/${utilsPages[0].replace(/\.md$/, '')}.md)`),
);

writeFileSync(join(API_DIR, 'Overview.md'), `---\n${OVERVIEW_FRONTMATTER.join('\n')}\n---\n\n${overview}`);
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
