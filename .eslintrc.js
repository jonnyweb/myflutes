const path = require('path');

const { READONLY, ERROR, OFF } = require('@scribd/eslint-config/rules/values');

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  globals: {
    mount: READONLY,
    mountComponent: READONLY,
    shallowMountComponent: READONLY,
    render: READONLY,
    shallow: READONLY,
  },
  settings: {
    'import/ignore': ['.coffee$', '.(scss|less|css)$'],
    react: {
      version: 'detect',
    },
  },
  plugins: ['import', 'prettier', 'jsx-a11y', 'react', 'jest'],
};
