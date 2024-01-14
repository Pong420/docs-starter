/**
 * @param {string} content
 */
module.exports = function loader(content) {
  return `
    import { Demo } from '@site/src/components/Demo';
    import Component from '${this.resourcePath}';

    const code = ${JSON.stringify(content, null, 2)};

    export default function DemoComponent(props) {
      return <Demo {...props} code={code} component={Component} />
    };
  `;
};
