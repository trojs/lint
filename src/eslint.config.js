/* @ts-self-types="../types/eslint.config.d.ts" */
import jsdocPlugin from 'eslint-plugin-jsdoc'
import importPlugin from 'eslint-plugin-import-x'
import globals from 'globals'
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

const customGlobals = {
  fetch: 'readonly',
  FormData: 'readonly',
  Headers: 'readonly',
  Request: 'readonly',
  Response: 'readonly'
}

/** @type {readonly unknown[]} */
const config = [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2024,
        ...customGlobals
      }
    },
    settings: {
      jsdoc: {
        mode: 'typescript'
      },
      'import-x/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.cjs', '.ts', '.tsx']
        },
        typescript: {
          project: true,
          alwaysTryTypes: true
        }
      }
    },
    plugins: {
      '@stylistic': stylisticPlugin,
      'import-x': importPlugin,
      jsdoc: jsdocPlugin,
      n: nodePlugin,
      promise: promisePlugin,
      sonarjs: sonarjsPlugin
    },
    rules: {
      ...importRules,
      ...trojsRules,
      ...jsdocRules,
      ...nodeRules,
      ...promiseRules,
      ...sonarRules,
      ...stylisticRules
    },
    files: ['src/**/*.js']
  }
]

export default config
