import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('feature', function() {
    this.route('collections');
    this.route('home');
    this.route('login');
    this.route('cart');

    this.route('admin', function() {
      this.route('addressManagement');
      this.route('paymentManagement');
      this.route('myBalance');
      this.route('myPoints');
      this.route('wishLists');
      this.route('invitePeople');
      this.route('myMessage');
      this.route('myorder');
    });

    this.route('signup');
  });
  this.route('upload');

});


export default Router;
