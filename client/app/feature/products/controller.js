import Ember from 'ember';
import DS from 'ember-data'; 

export default Ember.Controller.extend({
	addCart: Ember.inject.service('add-cart'),
	actions: {
		addtoCart() {
			this.transitionToRoute('feature.cart');
		}
	}
});