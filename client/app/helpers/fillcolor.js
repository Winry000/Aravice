import Ember from 'ember';

export function fillcolor(params/*, hash*/) {
  	return 'background-color:'+ params;
}

export default Ember.Helper.helper(fillcolor);
