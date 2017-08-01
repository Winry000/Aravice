import Ember from 'ember';
export default Ember.Component.extend({
	i18n: Ember.inject.service(),
	follow: false,
	source: Ember.computed('follow', function() {
   		return (this.get('follow') ? '中文' : 'English');
	}),
	actions: {
    	change: function() {
       		this.toggleProperty('follow');
       		if (this.get('follow') === false) {
       			this.set('i18n.locale', 'ch');
       		} else if (this.get('follow') === true){
       			this.set('i18n.locale','es');
       		}
    	}
	}
});
