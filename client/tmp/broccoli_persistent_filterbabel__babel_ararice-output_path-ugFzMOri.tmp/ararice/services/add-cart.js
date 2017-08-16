define('ararice/services/add-cart', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		item: null,
		init: function init() {
			this.set('item', _ember['default'].A([]));
		},
		add: function add(object) {
			this.get('item').pushObject(object);
		}
	});
});