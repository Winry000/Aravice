define('ararice/initializers/i18n', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize() /* application */{
    // application.inject('route', 'foo', 'service:foo');
  }

  exports['default'] = {
    name: 'i18n',
    initialize: initialize
  };
});