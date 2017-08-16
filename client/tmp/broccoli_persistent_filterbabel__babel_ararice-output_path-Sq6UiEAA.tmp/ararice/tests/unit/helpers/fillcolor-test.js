define('ararice/tests/unit/helpers/fillcolor-test', ['exports', 'ararice/helpers/fillcolor', 'qunit'], function (exports, _arariceHelpersFillcolor, _qunit) {

  (0, _qunit.module)('Unit | Helper | fillcolor');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _arariceHelpersFillcolor.fillcolor)([42]);
    assert.ok(result);
  });
});