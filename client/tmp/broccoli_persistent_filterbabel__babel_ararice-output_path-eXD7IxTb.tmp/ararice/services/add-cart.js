define('ararice/services/add-cart', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		item: null,
		totalprice: 0,
		flag: false, //to mark this item is first time add to cart or not
		init: function init() {
			this.set('item', _ember['default'].A([]));
		},
		add: function add(object) {
			this.set('flag', false);
			this.set('totalprice', 0);
			var sum = 0;
			if (this.get('item').length !== 0) {
				var arrayItem = this.get('item');
				for (var i = 0; i < arrayItem.length; i++) {
					if (arrayItem[i].id === object.id) {
						arrayItem[i].set('quantity', Number(arrayItem[i].quantity) + Number(object.quantity));
						this.set('flag', true);
					}
					sum += arrayItem[i].quantity * arrayItem[i].price;
				}
				this.set('totalprice', sum.toFixed(2));
			}
			if (this.get('flag') === false) {
				sum += object.quantity * object.price;
				this.set('totalprice', sum.toFixed(2));
				this.get('item').pushObject(object);
			}
		}
	});
});