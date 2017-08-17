define('ararice/tests/unit/helpers/mult-test', ['exports', 'ararice/helpers/mult', 'qunit'], function (exports, _arariceHelpersMult, _qunit) {

  (0, _qunit.module)('Unit | Helper | mult');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _arariceHelpersMult.mult)([42]);
    assert.ok(result);
  });
});