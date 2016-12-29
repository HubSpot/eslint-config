/**
 * @author HubSpot Dev
 * @license MIT
 * @module rules/eslint/style.js
 */

module.exports = {
  rules: {
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // disallow or enforce spaces inside of single line blocks
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],

    // require camel case names
    'camelcase': ['error', {
      'properties': 'always'
    }],

    // enforce or disallow capitalization of the first letter of a comment'
    'capitalized-comments': ['off', 'never', {
      'ignorePattern': '',
      'ignoreInlineComments': false,
      'ignoreConsecutiveComments': false
    }],

    // require trailing commas in multiline object literals
    'comma-dangle': ['off', 'always-multiline'],

    // enforce spacing before and after comma
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],

    // enforce one true comma style
    'comma-style': ['error', 'last'],

    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they are
    // assigned
    'func-name-matching': ['error', {
      'includeCommonJSModuleExports': true
    }],

    // require function expressions to have a name
    'func-names': ['error', 'as-needed'],

    // enforces use of function declarations or expressions
    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true
    }],

    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // this option sets a specific tab width for your code
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'VariableDeclarator': {
        'var': 1,
        'let': 1,
        'const': 1
      },
      'outerIIFEBody': 1,
      'FunctionDeclaration': {
        'body': 1
      },
      'FunctionExpression': {
        'body': 1
      },
      'ArrayExpression': 1,
      'ObjectExpression': 1
    }],

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],

    // require a space before & after certain keywords
    'keyword-spacing': ['error', {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true }
      }
    }],

    // enforce position of line comments
    'line-comment-position': ['off', {
      'position': 'above',
      'ignorePattern': '',
      'applyDefaultPatterns': true
    }],

    // enforces empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    'lines-around-directive': ['off', {
      'before': 'never',
      'after': 'always'
    }],

    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // enforce a maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // enforce a maximum line length
    'max-len': ['error', {
      'code': 100,
      'tabWidth': 2,
      'comments': 100,
      'ignoreComments': false,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
    }],

    // enforce a maximum file length
    'max-lines': ['off', {
      'max': 300,
      'skipBlankLines': true,
      'skipComments': true
    }],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['off', {
      'max': 3
    }],

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statements allowed per line
    'max-statements-per-line': ['error', {
      'max': 1
    }],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // require a capital letter for constructors
    'new-cap': ['error', {
      'newIsCap': true,
      'capIsNew': false,
      'properties': false
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'off',

    // require or disallow an empty newline after variable declarations
    'newline-after-var': 'off',

    // require newline before return statement
    'newline-before-return': 'off',

    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 4
    }],

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    'no-bitwise': 'off',

    // disallow use of the continue statement
    'no-continue': 'off',

    // disallow comments inline after code
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // disallow mixes of different operators
    'no-mixed-operators': ['off', {
      'groups': [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    }],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 0,
      'maxBOF': 0
    }],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',

    // disallow use of certain syntax in code
    'no-restricted-syntax': ['error', 'WithStatement'],

    // sisallow tabs in file
    'no-tabs': 'error',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', {
      'defaultAssignment': false
    }],

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce consistent line breaks inside braces
    'object-curly-newline': ['off', {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 2
      },
      'ObjectPattern': {
        'multiline': true,
        'minProperties': 2
      }
    }],

    // require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': ['off', {
      'allowMultiplePropertiesPerLine': true
    }],

    // allow just one var statement per function
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 'off',

    // enforce operators to be placed before or after line breaks
    'operator-linebreak': ['error', 'before'],

    // enforce padding within blocks
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    'quote-props': ['off', 'as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false
    }],

    // specify whether double or single quotes should be used
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': false
    }],

    // require JSDoc comment
    'require-jsdoc': ['off', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': false,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false
      }
    }],

    // enforce spacing before and after semicolons
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],

    // require or disallow use of semicolons instead of ASI
    'semi': ['error', 'always'],

    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', {
      'caseSensitive': true,
      'natural': false
    }],

    // sort variables within the same declaration block
    'sort-vars': 'off',

    // require or disallow space before blocks
    'space-before-blocks': ['error', {
      'functions': 'always',
      'keywords': 'always',
      'classes': 'always'
    }],

    // require or disallow space before function opening parenthesis
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never'
    }],

    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    'space-infix-ops': ['error', {
      'int32Hint': false
    }],

    // Require or disallow spaces before/after unary operators
    'space-unary-ops': ['off', {
      'words': true,
      'nonwords': false,
      'overrides': {}
    }],

    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always', {
      'line': {
        'exceptions': ['-', '+'],
        'markers': ['=', '!']
      },
      'block': {
        'balanced': true
      }
    }],

    // require or disallow the Unicode BOM
    'unicode-bom': ['off', 'never'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
  }
};
