/**
 * @author HubSpot Dev
 * @license MIT
 * @module __tests__/rules/base.spec.js
 */

const test = require('ava');
const { readdir } = require('fs');
const { join } = require('path');

const FILES = {};
const PLUGINS = [];

function each(object, callback) {
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      callback(object[key], key, object);
    }
  }
}

function getRules({ end }) {
  const dirpath = join(__dirname, '../rules/eslint');
  readdir(dirpath, (err, rules) => {
    if (err) throw err;
    rules.forEach(file => {
      FILES[file] = require(join(dirpath, file));
    });
    end();
  });
}

function getPlugins({ end }) {
  const dirpath = join(__dirname, '../rules/plugins');
  readdir(dirpath, (err, plugins) => {
    if (err) throw err;
    plugins.forEach(plugin => {
      const [name] = plugin.split('.');
      PLUGINS.push(name);
    });
    end();
  });
}

test.cb.before(getRules);
test.cb.before(getPlugins);

test('does not include plugins', t => {
  each(FILES, ({ plugins }, file) => {
    t.falsy(plugins, file);
  });
});

test('does not reference plugin rules', t => {
  const pattern = new RegExp(`^(${PLUGINS.join('|')})/`);
  const matcher = pattern.test.bind(pattern);
  each(FILES, ({ rules }, file) => {
    if (rules) {
      t.deepEqual(Object.keys(rules).filter(matcher), [], file);
    }
  });
});
