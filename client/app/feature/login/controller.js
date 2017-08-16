import Ember from 'ember';
import DS from 'ember-data'; 

export default Ember.Controller.extend({
  authManager: Ember.inject.service('session'),

  actions: {
    authenticate() {
      // let { identification, password } = this.getProperties('identification', 'password');
      // this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
      //   this.set('errorMessage', reason.error || reason);
      // });
      let email = this.get('email');
      let password = this.get('password');
      let data = {
        email,
        password
      };
      this.get('authManager').authenticate('authenticator:oauth2', data).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  } 
});