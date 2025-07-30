export default {
  'block-scoped-var': 'error',
  complexity: [
    'error',
    {
      max: 20
    }
  ],
  'consistent-return': 'error',
  'max-classes-per-file': [
    'error',
    1
  ],
  'max-params': [
    'warn',
    5
  ],
  'max-depth': [
    'warn',
    2
  ],
  'max-statements': [
    'warn',
    20
  ],
  'linebreak-style': [
    'warn',
    'unix'
  ],
  'class-methods-use-this': 'off',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-extra-label': 'error',
  'no-labels': [
    'error',
    {
      allowLoop: false,
      allowSwitch: false
    }
  ],
  'no-loop-func': 'error',
  'no-prototype-builtins': 'off',
  'no-restricted-syntax': [
    'error',
    'ForInStatement',
    'LabeledStatement',
    'WithStatement'
  ],
  'no-return-await': 'error',
  'no-else-return': [
    'error',
    {
      allowElseIf: false
    }
  ],
  'no-multi-assign': ['error'],
  'arrow-body-style': [
    'error',
    'as-needed'
  ],
  'no-console': 'warn',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'req',
        'request',
        'res',
        'response'
      ]
    }
  ],
  'no-useless-concat': 'error',
  'no-nested-ternary': 'error',
  'no-shadow': [
    'error',
    {
      hoist: 'all',
      allow: [
        'resolve',
        'reject',
        'done',
        'next',
        'err',
        'error'
      ]
    }
  ],
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
      allowTemplateLiterals: true
    }
  ],
  'quote-props': [
    'error',
    'as-needed'
  ],
  radix: 'error',
  'vars-on-top': 'error',
  'for-direction': 'error',
  'getter-return': [
    'error',
    {
      allowImplicit: true
    }
  ],
  'no-await-in-loop': 'error',
  'no-inner-declarations': 'error',
  'no-var': 'error',
  'no-lonely-if': 'error',
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  'prefer-destructuring': [
    'warn',
    {
      VariableDeclarator: {
        array: false,
        object: true
      },
      AssignmentExpression: {
        array: true,
        object: false
      }
    },
    {
      enforceForRenamedProperties: false
    }
  ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'error',
  'operator-assignment': [
    'error',
    'always'
  ],
  'prefer-object-spread': 'error',
  'no-delete-var': 'error',
  'no-multi-spaces': 'error',
  semi: [
    'error',
    'never'
  ],
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1
    }
  ],
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: ['TemplateLiteral *'],
      offsetTernaryExpressions: true
    }
  ],
  camelcase: [
    'error',
    {
      allow: ['^UNSAFE_'],
      properties: 'never',
      ignoreGlobals: true,
      ignoreDestructuring: false,
      ignoreImports: false
    }
  ],
  'comma-style': [
    'error',
    'last'
  ],
  'no-return-assign': [
    'error',
    'except-parens'
  ],
  'no-unused-vars': [
    'error',
    {
      args: 'none',
      caughtErrors: 'none',
      ignoreRestSiblings: true,
      vars: 'all'
    }
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: false
    }
  ],
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: false
    }
  ],
  'sort-imports': [
    'error',
    {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [
        'none',
        'all',
        'multiple',
        'single'
      ],
      allowSeparatedGroups: false
    }
  ]
}
