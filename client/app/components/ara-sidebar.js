import Ember from 'ember';

export default Ember.Component.extend({
	follow: true,
	source: Ember.computed('follow', function() {
   		return (this.get('follow') ? '/images/items/girl' : '/images/items/boy') + '.png';
	}),
	actions: {
    	change: function() {
       		this.toggleProperty('follow');
    	}
	}
});
