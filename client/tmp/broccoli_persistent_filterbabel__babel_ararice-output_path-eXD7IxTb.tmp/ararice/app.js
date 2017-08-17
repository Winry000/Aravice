define('ararice/app', ['exports', 'ember', 'ararice/resolver', 'ember-load-initializers', 'ararice/config/environment'], function (exports, _ember, _arariceResolver, _emberLoadInitializers, _arariceConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _arariceConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _arariceConfigEnvironment['default'].podModulePrefix,
    Resolver: _arariceResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _arariceConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});