module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'import-helpers'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
