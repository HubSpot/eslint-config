/**
 * @author HubSpot Dev
 * @license MIT
 * @module rules/plugins/react.js
 */

module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': ['off', {
      'ignoreTranspilerName': false
    }],

    // Forbid certain props on Components
    'react/forbid-component-props': ['off', {
      'forbid': ['className', 'style']
    }],

    // Forbid certain elements
    'react/forbid-elements': ['off', {
      'forbid': []
    }],

    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 'off',

    // Forbid certain propTypes (any, array, object)
    'react/forbid-prop-types': ['off', {
      'forbid': ['any', 'array', 'object']
    }],

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': ['error', 'always'],

    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': ['off', {
      'selfClosing': 'tag-aligned',
      'nonEmpty': 'after-props'
    }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': ['error', 'never', {
      'allowMultiline': true
    }],

    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],

    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', {
      'extensions': ['.js', '.jsx']
    }],

    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['off', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on',
    }],

    // Validate JSX indentation
    'react/jsx-indent': ['error', 2],

    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': ['off', {
      'maximum': 1
    }],

    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': ['error', {
      'ignoreRefs': true,
      'allowArrowFunctions': true,
      'allowBind': false,
    }],

    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': ['error', {
      'ignoreCase': false
    }],

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'off',

    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',

    // Enforce props alphabetical sorting
    'react/jsx-sort-props': ['off', {
      'ignoreCase': false,
      'shorthandFirst': false,
      'shorthandLast': false,
      'callbacksLast': false,
    }],

    // Validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': ['error', 'always'],

    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never'
    }],

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': ['error', {
      'declaration': true,
      'assignment': true,
      'return': true
    }],

    // Prevent using Array index in key props
    'react/no-array-index-key': 'off',

    // Prevent passing children as props
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'error',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': ['error', {
      'ignoreStateless': false
    }],

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    'react/no-set-state': 'off',

    // Prevent using string references
    'react/no-string-refs': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': ['error', {
      'customValidators': [],
      'skipShapeProps': true
    }],

    // Require ES6 class declarations over React.createClass
    'react/prefer-es6-class': ['off', 'always'],

    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': 'error',

    // Prevent missing props validation in a React component definition
    'react/prop-types': ['error', {
      'ignore': [],
      'customValidators': []
    }],

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'off',

    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': ['off', {
      'allowDecorators': []
    }],

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',

    // Enforce component methods order
    'react/sort-comp': ['error', {
      'order': [
        'mixins',
        'static-methods',
        'lifecycle',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': ['off', {
      'ignoreCase': false,
      'callbacksLast': false,
    }],

    // Enforce style prop value being an object
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error'
  }
};
