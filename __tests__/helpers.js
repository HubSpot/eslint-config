/**
 * @author HubSpot Dev
 * @license MIT
 * @module __tests__/helpers.js
 */

const { join } = require('path');
const { readFile } = require('fs');
const { CLIEngine } = require('eslint');

const cache = {
  fixtures: {},
  engines: {}
};

module.exports.getFixture = filename => {
  if (cache.fixtures[filename]) {
    return Promise.resolve(
      cache.fixtures[filename]
    );
  }

  return new Promise((resolve, reject) => {
    readFile(
      join(__dirname, '__fixtures__', filename),
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          cache.fixtures[filename] = data.toString();
          resolve(cache.fixtures[filename]);
        }
      }
    );
  });
};

module.exports.lint = (configuration, text) => {
  if (!cache.engines[configuration]) {
    const cli = new CLIEngine({
      useEslintrc: false,
      baseConfig: {
        extends: 'hubspot'
      }
    });

    cache.engines[configuration] = cli;
  }

  return cache.engines[configuration]
    .executeOnText(text)
    .results[0];
};
