// Configuration for regenerating the API reference under docs/api.
//
// The source of truth is the bee-js checkout under sources/ (see CLAUDE.md);
// run `npm run generate-api`, which drives typedoc with this config and then
// reshapes the output into the layout the site expects.
//
// Paths are resolved relative to this file, so it has to stay in the repo root.

/** @type {import('typedoc').TypeDocOptions} */
export default {
  // The namespace classes behind `bee.data`, `bee.wallet` and friends are not
  // exported from src/index.ts, so typedoc only ever sees them as the unlinkable
  // type of a `Bee` property. Adding them as entry points of their own is what
  // gives them pages; their names collide with exported types (Data, Tag, Pin,
  // Collection, Chunk), which is harmless here because each entry point is its
  // own module. generate-api.mjs folds the result back into docs/api/classes.
  entryPoints: ['sources/bee-js/src/index.ts', 'sources/bee-js/src/modules/*.ts'],

  // The context facade is internal plumbing: every namespace class takes one in
  // its constructor, but no caller ever builds one.
  exclude: ['**/modules/context.ts'],
  tsconfig: 'sources/bee-js/tsconfig.json',
  plugin: ['typedoc-plugin-markdown', './scripts/typedoc-frontmatter-titles.mjs'],
  out: 'docs/api',

  // `basePath` is what renders the "Defined in:" links as `bee-js/src/...`
  // rather than as paths relative to this repo.
  basePath: 'sources',

  readme: 'none',
  githubPages: false,

  // The page header and breadcrumbs duplicate what the Docusaurus theme already
  // renders around the page.
  hideBreadcrumbs: true,
  hidePageHeader: true,

  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
};
