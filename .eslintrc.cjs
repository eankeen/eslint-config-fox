const rootConfig = {
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false
    }
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
    atontest: false,
    embertest: false,
    webextensions: false,
    greasemonkey: false
  },

  'globals': {
    'document': 'readonly',
    'navigator': 'readonly',
    'window': 'readonly'
  },

  "plugins": [
    // "simple-import-sort",
    // "no-use-extend-native",
    // "no-secrets",
    // "prettier"
  ],
  "extends": [
    // "eslint:recommended",
    // "plugin:promise/recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings",
    // "plugin:jest/recommended",
    // "plugin:jest/style",
    // "plugin:monorepo/recommended"
  ],
  // remember: "off", "warn", "error"
  "rules": {

  },

  "overrides": [
    {
      "files": ["**/test.js"],
       "env": {
        "jest": true,
        "jest/globals": true
       }
    }
  ]
}

const isProd = process.env.NODE_ENV === 'production'

/**
 * Rule Resolution
 * configs of the lowest priority are added to the rootConfig. first
 * configCozy gets added. then, configStrict overwrites configCozy. lastly,
 * configExcessive overwrites configStrict (and by extension, whatever is
 * in configCozy)
 * 
 * when editing, keep in mind it is harder to move a rule from a higher
 * priority to a lower priority (if we wish to edit)
 */

/**
 * Enable default rules
 */
const configCozy = {
  default: {
    rules: {
      'eqeqeq': 'always',
      'no-eq-null': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-loop-func': 'error',
      'no-multi-spaces': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-return-await': 'error',
      'no-throw-literal': 'error',
      'require-unicode-regexp': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
    }
  },
  isNotProd: {
    rules: {
      'no-console': 'off',
      'no-unused-expressions': 'off',
    }
  },
  isProd: {
    rules: {
      'no-console': 'error',
      'no-unused-expressions': 'error',
    }
  }
}


/**
 * Enable rules that could prevent
 * potentially buggy code
 */
const configStrict = {
  default: {
    rules: {
      'no-await-in-loop': 'error',
      'no-useless-backreference': 'error',
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'complexity': '20',
      'default-case-last': 'error',
      'dot-location': ['error', 'property'],
      'max-classes-per-file': ['error', 2],
      'no-constructor-return': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-invalid-this': 'error',
      'no-new': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-promise-reject-errors': 'error',
      'wrap-iife': 'inside',
      'yoda': ['error', 'never'],
      'no-useless-backreference': 'error',
      'no-eval': 'error',
      'no-template-curly-in-string': 'error',
      'dot-notation': ['error', { allowKeywords: true }],
      'no-floating-decimal': 'error',
      "no-labels": ["error", { "allowLoop": false, "allowSwitch": false }],
    }
  },
  /**
   * TODO: maybe make it so that it shows as 'off' in the editor,
   * 'warnn' in the webpack console, and 'error', for production
   */
  isNotProd: {
    rules: {
      'no-empty-function': 'off',
      'no-extra-label': 'off',
      'no-lone-blocks': 'off'
    }
  },
  isProd: {
    rules: {
      'no-empty-function': 'on',
      'no-extra-label': 'on',
      'no-lone-blocks': 'on'
    }
  }
}


/**
 * Enable rules that could prevent
 * potentially misinterpreted code
 */
const configExcessive = {
  default: {
      rules: {
        'class-methods-use-this': 'error',
        'complexity': '15',
        'consistent-return': 'error',
        'default-case': 'error',
        'default-param-last': 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-implicit-coerction': 'error',
        'no-implicit-globals': 'error',
        'no-magic-numbers': 'off',
        'no-multi-str': 'error',
        'no-param-reassign': 'error',
        'no-restricted-properties': 'off',
        'no-sequences': 'on',
        'no-void': 'off',
        'no-warning-comments': 'off',
        'prefer-named-capture-group': 'error',
        'prefer-regex-literals': 'off',
        'radix': 'always',
        'require-await': 'off',
        'no-alert':  'error',
        'no-caller': 'error',
        'no-script-url': 'error',
        'vars-on-top': 'error',
      }
  },
  isNotProd: {

  },
  isProd: {

  }
}

const configVariants = [configCozy, configStrict, configExcessive]
for (const configVariant of configVariants) {
  Object.assign(rootConfig.rules, configVariant.default.rules)
  if (isProd) {
    Object.assign(rootConfig.rules, configVariant.isProd.rules)
  } else {
    Object.assign(rootConfig.rules, configVariant.isNotProd.rules)
  }
}

  console.log(rootConfig)

module.exports = rootConfig