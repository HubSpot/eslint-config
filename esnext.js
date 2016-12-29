/**
 * @author HubSpot Dev
 * @license MIT
 * @module esnext.js
 */

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7
  },
  extends: [
    'eslint-config-hubspot'
  ].map(require.resolve)
};
