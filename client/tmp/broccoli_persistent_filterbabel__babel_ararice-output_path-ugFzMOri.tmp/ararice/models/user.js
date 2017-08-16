define('ararice/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    points: _emberData['default'].attr('number')
  });
});