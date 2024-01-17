import path from 'path';
import { spawnSync } from 'child_process';
import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import codeTheme from './prism';
import './env';

const docBasePath = '/docs';

export default (): Config => {
  let gitRepoUrl = '';
  try {
    gitRepoUrl = spawnSync('git', ['remote', '-v'], { shell: true })
      .stdout.toString()
      .split('\n')
      .find(r => r.startsWith('origin'))
      ?.split('\t')[1]
      ?.replace(/\.git.*/, '')
      ?.replace(/:/g, '/')
      ?.replace('git@', 'https://') || '';
  } catch (error) {
    // 
  }

  return {
    title: 'Docusaurus',
    tagline: '',
    url: 'http://localhost:4040',
    baseUrl: '',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: '', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    plugins: [
      'docusaurus-plugin-sass',
      path.join(__dirname, 'plugin/demo-component.js'),
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        {
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
        } satisfies Preset.Options
      ]
    ],

    markdown: {
      mermaid: true
    },

    themes: ['@docusaurus/theme-mermaid'],

    themeConfig:
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
          ].filter(Boolean) as NonNullable<Preset.ThemeConfig['navbar']['items']>
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
      }) satisfies Preset.ThemeConfig
  };
};
