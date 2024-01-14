import path from 'path';

export default function (context, options) {
  return {
    name: 'custom-docusaurus-demo-component-plugin',
    configureWebpack(config, isServer, utils) {
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
}
