const { spawnSync } = require('child_process');
const codeTheme = require('./src/utils/prism');

const docBasePath = '/docs';

module.exports =
  /**
   * @return {import('@docusaurus/types').DocusaurusConfig}
   */
  async () => {
    const gitRepoUrl = spawnSync('git', ['remote', '-v'], { shell: true })
      .stdout.toString()
      .split('\n')
      .find(r => r.startsWith('origin'))
      ?.split('\t')[1]
      ?.replace(/\.git.*/, '');

    return {
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
      // TODO:
      organizationName: '<organizationName>', // Usually your GitHub org/user name.
      // TODO:
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
              routeBasePath: docBasePath,
              lastVersion: 'current',
              versions: {
                current: {
                  label: 'phaser3'
                }
              }
            },
            // TODO: ga tag
            // gtag: {
            //   trackingID: '',
            //   anonymizeIP: true,
            // },
            theme: {
              customCss: require.resolve('./src/css/custom.scss')
            }
          })
        ]
      ],

      markdown: {
        mermaid: true
      },

      themes: ['@docusaurus/theme-mermaid'],

      themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
          metadata: [{ name: 'robots', content: 'max-image-preview:large' }],
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
            }
          },
          colorMode: {
            respectPrefersColorScheme: true
          },
          navbar: {
            logo: {
              alt: 'Logo',
              src: 'img/logo-light-bg.svg',
              srcDark: 'img/logo-dark-bg.svg',
              href: '/',
              target: '_self',
              width: 114,
              height: 32
            },
            items: [
              {
                type: 'search',
                position: 'left'
              },
              {
                // TODO: github url
                href: gitRepoUrl,
                label: 'GitHub',
                position: 'right'
              }
            ]
          },
          tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 3
          },
          prism: {
            theme: codeTheme,
            // TODO: bash, zsh
            additionalLanguages: []
          }
        })
    };
  };
