import Ember from 'ember';

export default Ember.Component.extend({
	onsale: function() {
		return this.get('onsale') == 1;
	}.property('onsale')
});
