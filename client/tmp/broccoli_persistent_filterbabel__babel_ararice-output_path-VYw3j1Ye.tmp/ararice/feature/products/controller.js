define('ararice/feature/products/controller', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
	exports['default'] = _ember['default'].Controller.extend({
		addCart: _ember['default'].inject.service('add-cart'),
		actions: {
			addtoCart: function addtoCart() {
				this.transitionToRoute('feature.cart');
			}
		}
	});
});