declare const _default: {
    'block-scoped-var': string;
    complexity: (string | {
        max: number;
    })[];
    'consistent-return': string;
    'max-classes-per-file': (string | number)[];
    'max-params': (string | number)[];
    'max-depth': (string | number)[];
    'max-statements': (string | number)[];
    'linebreak-style': string[];
    'class-methods-use-this': string;
    'no-alert': string;
    'no-caller': string;
    'no-extra-label': string;
    'no-labels': (string | {
        allowLoop: boolean;
        allowSwitch: boolean;
    })[];
    'no-loop-func': string;
    'no-prototype-builtins': string;
    'no-restricted-syntax': string[];
    'no-return-await': string;
    'no-else-return': (string | {
        allowElseIf: boolean;
    })[];
    'no-multi-assign': string[];
    'arrow-body-style': string[];
    'no-console': string;
    'no-param-reassign': (string | {
        props: boolean;
        ignorePropertyModificationsFor: string[];
    })[];
    'no-useless-concat': string;
    'no-nested-ternary': string;
    'no-shadow': (string | {
        hoist: string;
        allow: string[];
    })[];
    quotes: (string | {
        avoidEscape: boolean;
        allowTemplateLiterals: boolean;
    })[];
    'quote-props': string[];
    radix: string;
    'vars-on-top': string;
    'for-direction': string;
    'getter-return': (string | {
        allowImplicit: boolean;
    })[];
    'no-await-in-loop': string;
    'no-inner-declarations': string;
    'no-var': string;
    'no-lonely-if': string;
    'prefer-arrow-callback': (string | {
        allowNamedFunctions: boolean;
        allowUnboundThis: boolean;
    })[];
    'prefer-destructuring': (string | {
        VariableDeclarator: {
            array: boolean;
            object: boolean;
        };
        AssignmentExpression: {
            array: boolean;
            object: boolean;
        };
        enforceForRenamedProperties?: undefined;
    } | {
        enforceForRenamedProperties: boolean;
        VariableDeclarator?: undefined;
        AssignmentExpression?: undefined;
    })[];
    'prefer-rest-params': string;
    'prefer-spread': string;
    'prefer-template': string;
    'require-yield': string;
    'operator-assignment': string[];
    'prefer-object-spread': string;
    'no-delete-var': string;
    'no-multi-spaces': string;
    semi: string[];
    'no-multiple-empty-lines': (string | {
        max: number;
    })[];
    indent: (string | number | {
        SwitchCase: number;
        VariableDeclarator: number;
        outerIIFEBody: number;
        MemberExpression: number;
        FunctionDeclaration: {
            parameters: number;
            body: number;
        };
        FunctionExpression: {
            parameters: number;
            body: number;
        };
        CallExpression: {
            arguments: number;
        };
        ArrayExpression: number;
        ObjectExpression: number;
        ImportDeclaration: number;
        flatTernaryExpressions: boolean;
        ignoreComments: boolean;
        ignoredNodes: string[];
        offsetTernaryExpressions: boolean;
    })[];
    camelcase: (string | {
        allow: string[];
        properties: string;
        ignoreGlobals: boolean;
        ignoreDestructuring: boolean;
        ignoreImports: boolean;
    })[];
    'comma-style': string[];
    'no-return-assign': string[];
    'no-unused-vars': (string | {
        args: string;
        caughtErrors: string;
        ignoreRestSiblings: boolean;
        vars: string;
    })[];
    'prefer-const': (string | {
        destructuring: string;
        ignoreReadBeforeAssign: boolean;
    })[];
    'no-unused-expressions': (string | {
        allowShortCircuit: boolean;
        allowTernary: boolean;
        allowTaggedTemplates: boolean;
        enforceForJSX: boolean;
    })[];
    'sort-imports': (string | {
        ignoreCase: boolean;
        ignoreDeclarationSort: boolean;
        ignoreMemberSort: boolean;
        memberSyntaxSortOrder: string[];
        allowSeparatedGroups: boolean;
    })[];
};
export default _default;
