import Ember from 'ember';

export default Ember.Route.extend({
	//  渲染到favorites模板上
	i18n: Ember.inject.service(),

  	beforeModel(){
    	this.set('i18n.locale', 'ch');
  	}
});