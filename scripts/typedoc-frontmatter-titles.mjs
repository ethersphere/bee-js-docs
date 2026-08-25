// typedoc plugin: give every generated page a frontmatter title free of markdown escapes.
//
// typedoc-plugin-markdown escapes markdown-significant characters in the page
// heading it emits, so a constant called NULL_OWNER arrives as
//
//   # Variable: NULL\_OWNER
//
// MDX renders that heading correctly, but Docusaurus derives the page title
// from the *raw* heading text when a page has no `title` frontmatter, and it
// does not undo the escapes (`toTextContentTitle` only strips backticks). The
// backslashes then leak into the browser tab title, the sidebar label, the
// breadcrumbs and the prev/next links.
//
// Unescaping the heading itself is not an option: `\<` and `\>` have to stay
// escaped or MDX parses them as JSX. So the heading is left alone and the
// unescaped name is added as frontmatter instead. The same leak reaches the
// `<meta name="description">` tag on pages whose only body is the escaped
// signature line, so those get an unescaped description too.
//
// The escaping is not configurable upstream — `escapeChars()` is hardcoded, and
// the `formatWithPrettier` option (the fix for typedoc2md/typedoc-plugin-markdown#398)
// leaves `\_` in place while corrupting the escaped angle brackets.

import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

const unescape = text => text.replace(/\\(.)/g, '$1');

/** Quote a value for YAML, doubling any single quotes it contains. */
const quote = value => `'${value.replace(/'/g, "''")}'`;

/** Strip the markdown a typedoc signature line carries: `> `, backticks, bold. */
const plain = line =>
  line
    .replace(/^>\s*/, '')
    .replace(/[`*]/g, '')
    .trim();

export function load(app) {
  app.renderer.on(MarkdownPageEvent.END, page => {
    if (!page.contents || page.contents.startsWith('---\n')) return;

    const heading = page.contents.match(/^# (.+)$/m);
    if (!heading || !heading[1].includes('\\')) return;

    const frontmatter = [`title: ${quote(unescape(heading[1]))}`];

    // Docusaurus excerpts the raw signature line for the meta description.
    const signature = page.contents.slice(heading.index).match(/^> .+$/m);
    if (signature?.[0].includes('\\')) {
      frontmatter.push(`description: ${quote(plain(unescape(signature[0])))}`);
    }

    page.contents = `---\n${frontmatter.join('\n')}\n---\n\n${page.contents}`;
  });
}
