define('ararice/initializers/load-bootstrap-config', ['exports', 'ararice/config/environment', 'ember-bootstrap/config'], function (exports, _arariceConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_arariceConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});