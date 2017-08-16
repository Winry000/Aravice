import Ember from 'ember';

export default Ember.Service.extend({
	item: null,
	init: function() {
    	this.set('item', Ember.A([]));
  	},
	add: function(object) {
		this.get('item').pushObject(object);
	}
});
