/**
 * @author HubSpot Dev
 * @license MIT
 * @module __tests__/rules/react.spec.js
 */

const test = require('ava');
const { getFixture, lint } = require('./helpers');
const { plugins } = require('../rules/plugins/react');

test('includes react plugin ', t => {
  t.plan(1);

  t.is(plugins[0], 'react');
});

test('passes a good component', async t => {
  t.plan(3);

  const component = await getFixture('GoodComponent.js');
  const result = lint('hubspot', component);

  t.falsy(result.warningCount, 'no warnings');
  t.falsy(result.errorCount, 'no errors');
  t.deepEqual(result.messages, [], 'no messages in results');
});

test('react/sort-comp: fails when random method is first', async t => {
  t.plan(2);

  const component = await getFixture('BadComponent.js');
  const result = lint('hubspot', component);

  t.truthy(result.errorCount, 'fails');
  t.deepEqual(result.messages[0].ruleId, 'react/sort-comp', 'fails due to sort');
});

test('react/sort-comp: succeeded when random method after lifecycle', async t => {
  t.plan(3);

  const component = await getFixture('GoodComponent.js');
  const result = lint('hubspot', component);

  t.falsy(result.warningCount, 'no warnings');
  t.falsy(result.errorCount, 'no errors');
  t.deepEqual(result.messages, [], 'no messages in results');
});
