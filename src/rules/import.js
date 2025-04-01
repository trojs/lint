import { flatConfigs } from 'eslint-plugin-import-x'

export default {
  ...flatConfigs.recommended.rules,
  'import-x/prefer-default-export': 'off',
  'import-x/named': 'error',
  'import-x/no-named-as-default': 'error',
  'import-x/no-named-as-default-member': 'error',
  'import-x/no-mutable-exports': 'error',
  'import-x/order': [
    'error',
    {
      groups: [
        [
          'builtin',
          'external',
          'internal'
        ]
      ]
    }
  ],
  'import-x/no-self-import': 'error',
  'import-x/no-cycle': [
    'error',
    {
      maxDepth: Infinity
    }
  ],
  'import-x/no-useless-path-segments': [
    'error',
    {
      commonjs: true
    }
  ],
  'import-x/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'always',
      ts: 'never'
    }
  ]
}
