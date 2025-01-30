import jsdocPlugin from 'eslint-plugin-jsdoc'
import importPlugin from 'eslint-plugin-import-x'
import nodePlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import stylisticPlugin from '@stylistic/eslint-plugin'
import stylisticJsPlugin from '@stylistic/eslint-plugin-js'
import trojsRules from './rules/tro.js'
import jsdocRules from './rules/jsdoc.js'
import nodeRules from './rules/node.js'
import sonarRules from './rules/sonar.js'
import stylisticRules from './rules/stylistic.js'
import importRules from './rules/import.js'
import promiseRules from './rules/promise.js'
import eslintConfig from './eslint.config.js'
const rules = {
  trojs: trojsRules,
  jsdoc: jsdocRules,
  node: nodeRules,
  sonar: sonarRules,
  format: stylisticRules,
  import: importRules,
  promise: promiseRules
}
const plugins = {
  stylistic: stylisticPlugin,
  '@stylistic/js': stylisticJsPlugin,
  'import-x': importPlugin,
  jsdoc: jsdocPlugin,
  n: nodePlugin,
  promise: promisePlugin,
  sonarjs: sonarjsPlugin
}
export { rules, plugins, eslintConfig as default }
