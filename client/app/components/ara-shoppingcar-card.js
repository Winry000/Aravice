import Ember from 'ember';

export default Ember.Component.extend({ 
	addCart: Ember.inject.service('add-cart'),
});
