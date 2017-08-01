define('ararice/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ararice/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _arariceConfigEnvironment) {
  var _config$APP = _arariceConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});