import { PrismTheme, themes as prismThemes } from 'prism-react-renderer';

export default {
  plain: {
    color: '#fff',
    backgroundColor: '#1A1A1A'
  },
  styles: [
    ...prismThemes.dracula.styles,
    {
      types: ['atrule', 'attr-value'],
      style: {
        color: '#FFE14D',
        fontStyle: 'normal'
      }
    },
    {
      types: ['function', 'boolean', 'number', 'constant', 'symbol', 'deleted'],
      style: {
        color: '#FF33DE'
      }
    },
    {
      types: ['string', 'tag', 'attr-name'],
      style: {
        color: '#05E585',
        fontStyle: 'normal'
      }
    },
    {
      types: ['keyword'],
      style: {
        color: '#03d5ff',
        fontStyle: 'normal'
      }
    },
    {
      types: ['function'],
      style: {
        color: '#ffe14c'
      }
    },
    {
      types: ['script'],
      style: {
        color: '#e300bd'
      }
    },
    {
      types: ['operator', 'class-name', 'punctuation', 'property'],
      style: {
        color: '#FFFFFF'
      }
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: '#00D5FF'
      }
    },
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#666666'
      }
    }
  ]
} satisfies PrismTheme;
