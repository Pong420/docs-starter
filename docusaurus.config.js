const codeTheme = require('./src/utils/prism');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    // TODO:
    title: '<Title>',
    // TODO:
    tagline: '',
    // TODO:
    url: 'http://localhost:4040',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '<organizationName>', // Usually your GitHub org/user name.
    projectName: '<title>', // Usually your repo name.
    plugins: ['docusaurus-plugin-sass'],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            // sidebarCollapsed: false,
            sidebarPath: require.resolve('./sidebars.js'),
            // TODO: Please change this to your repo.
            // editUrl: '',
            breadcrumbs: false,
            routeBasePath: '/',
          },
          // TODO: ga tag
          // gtag: {
          //   trackingID: '',
          //   anonymizeIP: true,
          // },
          theme: {
            customCss: require.resolve('./src/css/custom.scss'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        metadata: [
          { name: 'robots', content: 'max-image-preview:large' },
          // TODO: adding keywords metadata
          // {
          //   name: 'keywords',
          //   content: '',
          // },
        ],
        image: '/img/social-preview.jpg',
        // TODO: algolia
        // algolia: {
        //   appId: '',
        //   apiKey: '',
        //   indexName: '',
        //   contextualSearch: true,
        //   externalUrlRegex: '',
        // },
        docs: {
          sidebar: {
            // autoCollapseCategories: false,
          },
        },
        colorMode: {
          respectPrefersColorScheme: true,
        },
        navbar: {
          logo: {
            alt: 'Logo',
            src: 'img/logo-light-bg.svg',
            srcDark: 'img/logo-dark-bg.svg',
            href: '/',
            target: '_self',
            width: 114,
            height: 32,
          },
          items: [
            {
              type: 'search',
              position: 'left',
            },
            {
              // TODO: github url
              href: 'https://github.com/Pong420/docs-starter',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 2,
        },
        prism: {
          theme: codeTheme,
          additionalLanguages: [],
        },
      }),
  }
);
