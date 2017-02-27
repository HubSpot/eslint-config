/**
 * @author HubSpot Dev
 * @license MIT
 * @module rules/eslint/es6.js
 */

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturns: false,
      impliedStrict: false,
      jsx: false,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    // enforces no braces where they can be omitted
    'arrow-body-style': ['off', 'as-needed'],

    // require parens in arrow function arguments
    'arrow-parens': ['error', 'as-needed', {
      'requireForBlockBody': false
    }],

    // require space before/after arrow function's arrow
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    // enforce the spacing around the * in generator functions
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }],

    // disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', {
      'allowParens': true,
    }],

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow duplicate name in class members
    'no-dupe-class-members': 'error',

    // disallow duplicate module imports
    'no-duplicate-imports': ['error', {
      'includeExports': false
    }],

    // disallow symbol constructor
    'no-new-symbol': 'error',

    // disallow specific imports
    'no-restricted-imports': 'off',

    // disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',

    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error', {
      'ignoreDestructuring': false,
      'ignoreImport': false,
      'ignoreExport': false
    }],

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always', {
      'ignoreConstructors': false,
      'avoidQuotes': true
    }],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': true,
      'allowUnboundThis': true
    }],

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 'error',

    // require destructuring from arrays and/or objects
    'prefer-destructuring': ['off', {
      'array': true,
      'object': true
    }, {
      'enforceForRenamedProperties': true
    }],

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'off',

    // use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',

    // suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    'require-yield': 'error',

    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['error', 'never'],

    // import sorting
    'sort-imports': 'off',

    // require symbol descriptions
    'symbol-description': 'error',

    // enforce usage of spacing in template strings
    'template-curly-spacing': ['error', 'never'],

    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after']
  }
};
