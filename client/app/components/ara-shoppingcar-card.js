import Ember from 'ember';

export default Ember.Component.extend({ 
	addCartService: Ember.inject.service('add-cart'),
});
