define('ararice/tests/test-helper', ['exports', 'ararice/tests/helpers/resolver', 'ember-qunit'], function (exports, _arariceTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_arariceTestsHelpersResolver['default']);
});