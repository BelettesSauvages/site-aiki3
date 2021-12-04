import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | club', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:club');
    assert.ok(route);
  });
});
