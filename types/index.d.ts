export namespace rules {
    export { trojsRules as trojs };
    export { jsdocRules as jsdoc };
    export { nodeRules as node };
    export { sonarRules as sonar };
    export { stylisticRules as format };
    export { importRules as import };
    export { promiseRules as promise };
    export { jsRules as js };
    export let all: any;
}
/** @type {Record<string, unknown>} */
export const plugins: Record<string, unknown>;
import eslintConfig from './eslint.config.js';
import trojsRules from './rules/tro.js';
import jsdocRules from './rules/jsdoc.js';
import nodeRules from './rules/node.js';
import sonarRules from './rules/sonar.js';
import stylisticRules from './rules/stylistic.js';
import importRules from './rules/import.js';
import promiseRules from './rules/promise.js';
declare const jsRules: any;
export { eslintConfig as default };
