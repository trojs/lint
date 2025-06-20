import jsdocPlugin from 'eslint-plugin-jsdoc'
import importPlugin from 'eslint-plugin-import-x'
import nodePlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import stylisticPlugin from '@stylistic/eslint-plugin'
import pluginJs from '@eslint/js'
import trojsRules from './rules/tro.js'
import jsdocRules from './rules/jsdoc.js'
import nodeRules from './rules/node.js'
import sonarRules from './rules/sonar.js'
import stylisticRules from './rules/stylistic.js'
import importRules from './rules/import.js'
import promiseRules from './rules/promise.js'
import eslintConfig from './eslint.config.js'

const jsRules = pluginJs.configs.recommended.rules
const rules = {
  trojs: trojsRules,
  jsdoc: jsdocRules,
  node: nodeRules,
  sonar: sonarRules,
  format: stylisticRules,
  import: importRules,
  promise: promiseRules,
  js: jsRules,
  all: {
    ...jsRules,
    ...importRules,
    ...trojsRules,
    ...jsdocRules,
    ...nodeRules,
    ...promiseRules,
    ...sonarRules,
    ...stylisticRules
  }
}
const plugins = {
  '@stylistic': stylisticPlugin,
  'import-x': importPlugin,
  jsdoc: jsdocPlugin,
  n: nodePlugin,
  promise: promisePlugin,
  sonarjs: sonarjsPlugin,
  js: pluginJs
}
export { rules, plugins, eslintConfig as default }
