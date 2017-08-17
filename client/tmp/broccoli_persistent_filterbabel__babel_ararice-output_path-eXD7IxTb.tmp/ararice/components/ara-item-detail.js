define('ararice/components/ara-item-detail', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		addCartService: _ember['default'].inject.service('add-cart'),
		arrayColor: [],
		products: [],
		quantity: null,
		hidenext: true,
		init: function init() {
			this._super.apply(this, arguments);
			this.set('quantity', 1);
		},
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
			addCart: function addCart() {
				_ember['default'].run.later(this, function () {
					this.toggleProperty('Showingnext');
					this.toggleProperty('hidenext');
				}, 500);
				var item = _ember['default'].Object.create({
					id: this.get('id'),
					title: this.get('title'),
					price: this.get('price'),
					img: this.get('img'),
					quantity: this.get('quantity'),
					color: this.get('color')
				});
				this.get('addCartService').add(item);
			},
			viewCart: function viewCart() {
				var action = this.get('addCart');
				if (_ember['default'].typeOf(action) === 'function') {
					action();
				}
			},
			continueShop: function continueShop() {
				_ember['default'].run.later(this, function () {
					this.toggleProperty('Showingnext');
					this.toggleProperty('hidenext');
				}, 500);
			}
		}
	});
});