import Ember from 'ember';

export default Ember.Route.extend({
	i18n: Ember.inject.service(),

  	beforeModel(){
    	this.set('i18n.locale', 'ch');
  	},
  	// model: function(){
   //  	return $.getJSON("item.json");
  	// }
  	model(){
  		return this.store.findAll('post');
  	}
    // model() {
    //   return ['1','2','3'];
    // }

});
