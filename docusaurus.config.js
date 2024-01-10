import { spawnSync } from 'child_process';
import codeTheme from './prism.js';

const docBasePath = '/docs';

/**
 * @return {import('@docusaurus/types').DocusaurusConfig}
 */
export default async () => {
  let gitRepoUrl = '';
  try {
    spawnSync('git', ['remote', '-v'], { shell: true })
      .stdout.toString()
      .split('\n')
      .find(r => r.startsWith('origin'))
      ?.split('\t')[1]
      ?.replace(/\.git.*/, '')
      ?.replace(/:/g, '/')
      ?.replace('git@', 'https://') || '';
  } catch (error) {}

  return {
    title: '<Title>',
    tagline: '',
    url: 'http://localhost:4040',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '', // Usually your GitHub org/user name.
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
            breadcrumbs: false,
            routeBasePath: docBasePath,
            lastVersion: 'current',
            versions: {
              current: {
                label: 'phaser3'
              }
            }
          },
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
        docs: {
          sidebar: {
            // autoCollapseCategories: false,
          }
        },
        colorMode: {
          respectPrefersColorScheme: true
        },
        navbar: {
          items: [
            {
              type: 'search',
              position: 'left'
            },
            gitRepoUrl && {
              href: gitRepoUrl,
              label: 'GitHub',
              position: 'right'
            }
          ].filter(Boolean)
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 3
        },
        prism: {
          theme: codeTheme,
          // TODO: bash, zsh
          additionalLanguages: ['json', 'typescript', 'javascript', 'bash']
        }
      })
  };
};
