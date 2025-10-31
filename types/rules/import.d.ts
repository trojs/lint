declare const _default: {
    'import-x/prefer-default-export': string;
    'import-x/named': string;
    'import-x/no-named-as-default': string;
    'import-x/no-named-as-default-member': string;
    'import-x/no-mutable-exports': string;
    'import-x/order': (string | {
        groups: string[][];
    })[];
    'import-x/no-self-import': string;
    'import-x/no-cycle': (string | {
        maxDepth: number;
    })[];
    'import-x/no-useless-path-segments': (string | {
        commonjs: boolean;
    })[];
    'import-x/extensions': (string | {
        js: string;
        ts: string;
    })[];
};
export default _default;
