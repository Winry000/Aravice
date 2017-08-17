define('ararice/tests/helpers/resolver', ['exports', 'ararice/resolver', 'ararice/config/environment'], function (exports, _arariceResolver, _arariceConfigEnvironment) {

  var resolver = _arariceResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _arariceConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _arariceConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});