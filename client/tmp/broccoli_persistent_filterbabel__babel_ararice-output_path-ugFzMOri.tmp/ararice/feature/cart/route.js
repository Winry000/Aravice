define('ararice/feature/cart/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    i18n: _ember['default'].inject.service(),

    beforeModel: function beforeModel() {
      this.set('i18n.locale', 'ch');
    }
  });
});