module.exports = {
  title: "Bee JS Library",
  tagline: "Welcome to the Swarm",
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  url: "https://bee-js.ethswarm.org",
  baseUrl: "/",
  trailingSlash: true,
  plugins: [
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
    navbar: {
      title: "Bee Js Documentation",
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
      appId: "D7BASQ1ESY",

      apiKey: "8a175ff0c34022d46b4b26cf6f02ad41",

      indexName: "bee-js-docs-search",

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
