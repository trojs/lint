/* @ts-self-types="../../types/rules/promise.d.ts" */
import promisePlugin from 'eslint-plugin-promise'

const { rules } = promisePlugin.configs['flat/recommended']
/** @type {Record<string, unknown>} */
const promiseRules = rules

export default promiseRules
