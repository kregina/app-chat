module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "max-len": ["error", 90, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
    }],
    'import/order': ['error', {
      'groups': [['builtin', 'external'], 'internal', ['sibling', 'parent', 'index']],
      'pathGroups': [
        {
          'pattern': 'react',
          'group': 'external',
          'position': 'before'
        }
      ],
      'pathGroupsExcludedImportTypes': ['react'],
      'newlines-between': 'always',
      'alphabetize': {
        'order': 'asc',
        'caseInsensitive': true
      }
    }]
  },
}
