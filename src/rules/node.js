/* @ts-self-types="../../types/rules/node.d.ts" */
import nodePlugin from 'eslint-plugin-n'
/** @type {Record<string, unknown>} */
const rules = {
  ...nodePlugin.configs['flat/recommended-script'].rules,
  'n/no-unpublished-import': 'off',
  'n/no-unsupported-features/es-syntax': [
    'off',
    {}
  ],
  'n/no-unsupported-features/node-builtins': 'warn'
}
export default rules
