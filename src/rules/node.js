import nodePlugin from 'eslint-plugin-n'
export default {
  ...nodePlugin.configs['flat/recommended-script'].rules,
  'n/no-unpublished-import': 'off',
  'n/no-unsupported-features/es-syntax': [
    'off',
    {}
  ],
  'n/no-unsupported-features/node-builtins': 'warn'
}
