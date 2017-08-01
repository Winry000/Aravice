define('ararice/components/ara-sidebar', ['exports', 'ember'], function (exports, _ember) {
			exports['default'] = _ember['default'].Component.extend({
						follow: true,
						source: _ember['default'].computed('follow', function () {
									return (this.get('follow') ? '/images/items/girl' : '/images/items/boy') + '.png';
						}),
						actions: {
									change: function change() {
												this.toggleProperty('follow');
									}
						}
			});
});