import Ember from 'ember';

export function mult(params1, params2) {
  return (params1[0]* params1[1]).toFixed(2);
}

export default Ember.Helper.helper(mult);
