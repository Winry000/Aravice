define('ararice/components/tiny/ara-logtitle', ['exports', 'ember'], function (exports, _ember) {
   exports['default'] = _ember['default'].Component.extend({
      i18n: _ember['default'].inject.service(),
      follow: false,
      source: _ember['default'].computed('follow', function () {
         return this.get('follow') ? '中文' : 'English';
      }),
      actions: {
         change: function change() {
            this.toggleProperty('follow');
            if (this.get('follow') === false) {
               this.set('i18n.locale', 'ch');
            } else if (this.get('follow') === true) {
               this.set('i18n.locale', 'es');
            }
         }
      }
   });
});