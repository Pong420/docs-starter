import path from 'path';
import { PluginModule } from '@docusaurus/types';

const plugin: PluginModule = function () {
  return {
    name: 'custom-docusaurus-demo-component-plugin',
    configureWebpack() {
      return {
        mergeStrategy: { 'module.rules': 'prepend' },
        module: {
          rules: [
            {
              enforce: 'pre',
              test: [/\.tsx?$/, /\.jsx?$/],
              resourceQuery: /demo/,
              use: [path.join(__dirname, 'demo-loader.js')]
            }
          ]
        }
      };
    }
  };
};

export default plugin;
