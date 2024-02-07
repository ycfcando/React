module.exports = {
  ignorePatterns: ['config/*.js'],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/jsx-runtime',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/display-name': 0,
    'import/named': 2,
    'import/no-unresolved': 2
  },
  settings: {
    'import/resolver': {
      typescript: true
    }
  }
}
