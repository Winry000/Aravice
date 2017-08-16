define('ararice/components/ara-item-detail', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		addCart: _ember['default'].inject.service('add-cart'),
		arrayColor: [],
		products: [],
		quantity: null,
		outStock: (function () {
			return this.get('stock') == 0;
		}).property('outStock'),

		arraycolor: (function () {
			if (this.get('color') !== null) {
				this.set('arrayColor', this.get('color').split(','));
			}
			return this.get('arrayColor');
		}).property('color'),

		actions: {
			addtoCart: function addtoCart() {
				var item = _ember['default'].Object.create({
					title: this.get('title'),
					price: this.get('price'),
					img: this.get('img'),
					quantity: this.get('quantity')
				});
				console.log(this.get('quantity'));
				this.get('addCart').add(item);
				this.transitionTo('feature.cart');
			}
		}
	});
});