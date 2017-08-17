define('ararice/feature/collections/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    i18n: _ember['default'].inject.service(),

    beforeModel: function beforeModel() {
      this.set('i18n.locale', 'ch');
    },
    // model: function(){
    //  	return $.getJSON("item.json");
    // }
    model: function model() {
      return this.store.findAll('post');
    }
    // model() {
    //   return ['1','2','3'];
    // }

  });
});