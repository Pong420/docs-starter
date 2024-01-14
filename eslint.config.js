const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname
  // optional,
});

module.exports = [
  {
    ignores: ['*.js', '**/protobuf/']
  },
  ...compat
    .config({
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        project: true,
        tsconfigRootDir: __dirname,
        EXPERIMENTAL_useProjectService: true
      },
      rules: {
        ...js.configs.recommended.rules,
        ...compat.config(typescriptPlugin.configs['eslint-recommended'])[0].rules,
        ...typescriptPlugin.configs['recommended'].rules,
        ...typescriptPlugin.configs['recommended-requiring-type-checking'].rules,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/no-unsafe-declaration-merging': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      }
    })
    .map(c => ({ ...c, files: ['*.ts', '**/*.ts', '**/*.tsx'] }))
];
