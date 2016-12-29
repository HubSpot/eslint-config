/**
 * @author HubSpot Dev
 * @license MIT
 * @module index.js
 */

module.exports = {
  env: {
    node: true,
    browser: true,
    jasmine: true
  },
  extends: [
    'eslint-config-hubspot/rules/eslint/best-practices',
    'eslint-config-hubspot/rules/eslint/errors',
    'eslint-config-hubspot/rules/eslint/es6',
    'eslint-config-hubspot/rules/eslint/strict',
    'eslint-config-hubspot/rules/eslint/style',
    'eslint-config-hubspot/rules/eslint/variables',
    'eslint-config-hubspot/rules/plugins/react'
  ].map(require.resolve)
};
