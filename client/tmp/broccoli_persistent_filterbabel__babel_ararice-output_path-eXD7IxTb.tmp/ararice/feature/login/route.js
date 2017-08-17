define('ararice/feature/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    //  渲染到favorites模板上
    i18n: _ember['default'].inject.service(),
    beforeModel: function beforeModel() {
      this.set('i18n.locale', 'ch');
    }
  });
});