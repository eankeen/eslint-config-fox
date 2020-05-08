/**
 * root configuration
 */
module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false,
    },
  },

  env: {
    browser: false,
    node: false,
    commonjs: true,
    'shared-node-browser': true,
    es6: true,
    es2017: true,
    es2020: true,
    worker: false,
    amd: false,
    mocha: false,
    jasmine: false,
    jest: false,
    phantomjs: false,
    protractor: false,
    qunit: false,
    jquery: false,
    prototypejs: false,
    shelljs: false,
    meteor: false,
    mongo: false,
    applescript: false,
    nashorn: false,
    serviceworker: false,
    atomtest: false,
    embertest: false,
    webextensions: false,
    greasemonkey: false,
  },

  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },

  plugins: [
    // "simple-import-sort",
    // "no-use-extend-native",
    // "no-secrets",
    // "prettier"
  ],
  extends: [
    // "eslint:recommended",
    // "plugin:promise/recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:jest/recommended",
    // "plugin:jest/style",
    // "plugin:monorepo/recommended"
  ],
  // remember: "off", "warn", "error"
  rules: {},

  overrides: [
    {
      files: ['**/test.js'],
      env: {
        // "jest": true,
        // "jest/globals": true
      },
    },
  ],
}
