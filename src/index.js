import trojsRules from './rules/tro.js'
import jsdocRules from './rules/jsdoc.js'
import nodeRules from './rules/node.js'
import sonarRules from './rules/sonar.js'
import stylisticRules from './rules/stylistic.js'
import importRules from './rules/import.js'
import promiseRules from './rules/promise.js'
import eslintConfig from './eslint.config.js'
const rules = { trojs: trojsRules, jsdoc: jsdocRules, node: nodeRules, sonar: sonarRules, format: stylisticRules, import: importRules, promise: promiseRules}
export { rules, eslintConfig as default }
