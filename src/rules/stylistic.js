/* @ts-self-types="../../types/rules/stylistic.d.ts" */
import stylisticPlugin from '@stylistic/eslint-plugin'

/** @type {Record<string, unknown>} */
const rules = {
  ...stylisticPlugin.configs.recommended.rules,
  '@stylistic/semi': [
    'error',
    'never'
  ],
  '@stylistic/comma-dangle': [
    'error',
    'never'
  ],
  '@stylistic/quote-props': [
    'error',
    'as-needed'
  ],
  '@stylistic/arrow-parens': [
    'error',
    'always'
  ],
  '@stylistic/space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'always'
    }
  ],
  '@stylistic/brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: true
    }
  ]
}

export default rules
