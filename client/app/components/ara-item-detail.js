import Ember from 'ember';

export default Ember.Component.extend({
	addCartService: Ember.inject.service('add-cart'),
	arrayColor: [],
	products: [],
	quantity: null,
	hidenext: true,
	init: function() {
		this._super(...arguments);
		this.set('quantity', 1);
	},
	outStock: function() {
		return this.get('stock') == 0;
	}.property('outStock'),

	arraycolor: function() {
		if (this.get('color') !== null) {
			this.set('arrayColor',this.get('color').split(','));
		}
		return this.get('arrayColor');
	}.property('color'),

	actions: {
		addCart() {
			Ember.run.later(this, function () {
        		this.toggleProperty('Showingnext');
				this.toggleProperty('hidenext');
      		}, 500);
			let item = Ember.Object.create({
				id : this.get('id'),
				title: this.get('title'), 
				price: this.get('price'), 
				img: this.get('img'),
				quantity: this.get('quantity'),
				color: this.get('color'),
			});
			this.get('addCartService').add(item);
		},
	    viewCart() {
	    	let action = this.get('addCart');
			if (Ember.typeOf(action) === 'function') {
				action();
			}
	    },
	    continueShop() {
	    	Ember.run.later(this, function () {
        		this.toggleProperty('Showingnext');
				this.toggleProperty('hidenext');
      		}, 500);
	    }
	}
});
