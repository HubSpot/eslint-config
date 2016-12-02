/**
 * @author HubSpot Dev
 * @license MIT
 * @module rules/eslint/strict.js
 */

module.exports = {
  rules: {
    // babel inserts `'use strict';` for us
    'strict': ['error', 'never']
  }
};
