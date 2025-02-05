import stylisticPlugin from '@stylistic/eslint-plugin'
export default {
  ...stylisticPlugin.configs['recommended-flat'].rules,
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
  ]
}
