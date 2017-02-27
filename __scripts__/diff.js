/**
 * @author HubSpot Dev
 * @license MIT
 * @module __scripts__/diff.js
 */

const glob = require('glob');
const { join, resolve } = require('path');
const { cyan } = require('chalk');
const loader = require('eslint/lib/load-rules');
const { rules: reactRules } = require('eslint-plugin-react');

const eslintRules = loader();

const RULES_GLOB = join(__dirname, '../rules', '**/*.js');

const DEPRECATED = {
  'no-spaced-func': true,
  'no-native-reassign': true,
  'no-negated-in-lhs': true,
  'prefer-reflect': true,
  'react/no-comment-textnodes': true,
  'react/require-extension': true,
  'react/wrap-multilines': true
};

function globber(pattern) {
  return new Promise((success, reject) => {
    glob(
      pattern,
      { nodir: true },
      (err, ...args) => {
        if (err) {
          reject(err);
        } else {
          success(...args);
        }
      }
    );
  });
}

function dedupe(rules, subset, missing, prefix) {
  Object.keys(subset).forEach(rule => {
    const key = prefix ? `${prefix}/${rule}` : rule;
    if (!{}.hasOwnProperty.call(DEPRECATED, key)) {
      if ({}.hasOwnProperty.call(rules, key)) {
        delete rules[key];
      } else {
        missing[key] = true;
      }
    }
  });
}

function print(heading, object) {
  const rules = Object.keys(object);
  console.log(cyan.underline(heading));

  if (rules.length) {
    rules.forEach(rule => console.log(`- ${rule}`));
  } else {
    console.log('- [none]');
  }
  console.log();
}

globber(RULES_GLOB)
  .then(files => {
    const rules = files.reduce((memo, file) => {
      const { rules: current } = require(resolve(file));
      return Object.assign({}, memo, current);
    }, {});

    const missing = {};

    // ESLint
    dedupe(rules, eslintRules, missing);

    // React
    dedupe(rules, reactRules, missing, 'react');

    // Print extraneous
    print('Extraneous', rules);

    // Print missing
    print('Missing', missing);
  })
  .catch(err => {
    console.error(err);
  });
