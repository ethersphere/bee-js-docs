// Configuration for regenerating the API reference under docs/api.
//
// The source of truth is the bee-js checkout under sources/ (see CLAUDE.md);
// run `npm run generate-api`, which drives typedoc with this config and then
// reshapes the output into the layout the site expects.
//
// Paths are resolved relative to this file, so it has to stay in the repo root.

/** @type {import('typedoc').TypeDocOptions} */
export default {
  entryPoints: ['sources/bee-js/src/index.ts'],
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
