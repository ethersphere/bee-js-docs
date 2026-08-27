const { themes: prismThemes } = require("prism-react-renderer");

module.exports = {
  title: "bee-js Library",
  tagline: "Welcome to the Swarm",
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  url: "https://bee-js.ethswarm.org",
  baseUrl: "/",
  trailingSlash: true,
  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: false,
        generateLLMsFullTxt: true,
        title: 'bee-js Documentation',
        description: 'bee-js is the official JavaScript/TypeScript SDK for building applications on Swarm, a decentralised storage and communication network.',
        excludeImports: true,
        removeDuplicateHeadings: true,
      },
    ],
  ],
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Swarm", // Usually your GitHub org/user name.
  projectName: "bee-js-docs", // Usually your repo name.
  themeConfig: {
    colourMode: {
      defaultMode: "dark",
    },
    prism: {
      // Docusaurus defaults to palenight for both modes, which is a dark theme
      // and italicises comments and keywords. These are the VS Code Light+ and
      // Dark+ palettes, which use no italics at all.
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
    navbar: {
      title: "bee-js Documentation",
      logo: {
        alt: "Swarm Logo",
        src: "img/swarm-logo-2.svg",
      },
      items: [
      
        {
          href: "https://github.com/ethersphere/bee-js",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Swarm",
          items: [
            {
              label: "Swarm",
              to: "https://ethswarm.org",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/ykCupZMuww",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/ethswarm",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ethswarm",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/ethereum-swarm",
            },
            {
              label: "GitHub",
              href: "https://github.com/ethersphere/bee-js",
            },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()}.`,
    },
    algolia: {
      appId: "ZC4FF0H3GZ",

      apiKey: "70752ba60034b0dcce5cc5888f2fd267",

      indexName: "bee-js-docs-2026",

      contextualSearch: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ethersphere/bee-js-docs"
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};
