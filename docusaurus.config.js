module.exports = {
  title: 'Bee JS Library',
  tagline: 'Welcome to the Swarm',
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  url: 'https://bee-js.ethswarm.org',
  baseUrl: '/',
  plugins: [require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Swarm', // Usually your GitHub org/user name.
  projectName: 'bee-js-docs', // Usually your repo name.
  themeConfig: {
    colourMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Swarm Bee JS Library',
      logo: {
        alt: 'Swarm Logo',
        src: 'img/swarm-logo-2.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Get Started',
          position: 'left',
        },
        {
          to: 'docs/api-reference',
          activeBasePath: 'docs',
          label: 'API Reference',
          position: 'left',
        },
        {
          href: 'https://github.com/ethersphere/bee-js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Swarm',
          items: [
            {
              label: 'Swarm',
              to: 'https://ethswarm.org',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mattermost',
              href: 'https://beehive.ethswarm.org/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/ethswarm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ethswarm',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/ethereum-swarm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ethersphere/bee-js',
            },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()}.`,
    },
    announcementBar: {
      id: 'bee_announcements',
      content:
        '⭐️ Proudly announcing the Bee-JS Beta Release! ⭐️',
      backgroundColor: '#dd7200', // Defaults to `#fff`.
      textColor: '#242424', // Defaults to `#000`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/bee-js-docs/blob/master',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/bee-js-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
