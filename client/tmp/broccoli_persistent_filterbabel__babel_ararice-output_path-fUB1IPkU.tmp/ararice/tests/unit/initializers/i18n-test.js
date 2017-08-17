define('ararice/tests/unit/initializers/i18n-test', ['exports', 'ember', 'ararice/initializers/i18n', 'qunit', 'ararice/tests/helpers/destroy-app'], function (exports, _ember, _arariceInitializersI18n, _qunit, _arariceTestsHelpersDestroyApp) {

  (0, _qunit.module)('Unit | Initializer | i18n', {
    beforeEach: function beforeEach() {
      var _this = this;

      _ember['default'].run(function () {
        _this.application = _ember['default'].Application.create();
        _this.application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      (0, _arariceTestsHelpersDestroyApp['default'])(this.application);
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    (0, _arariceInitializersI18n.initialize)(this.application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});