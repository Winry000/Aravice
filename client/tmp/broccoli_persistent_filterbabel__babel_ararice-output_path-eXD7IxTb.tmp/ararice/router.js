define('ararice/router', ['exports', 'ember', 'ararice/config/environment'], function (exports, _ember, _arariceConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _arariceConfigEnvironment['default'].locationType,
    rootURL: _arariceConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.resource('feature', function () {
      this.route('authenticated');
      this.route('collections');
      this.route('home', { path: '/home' });
      this.route('login');
      this.route('cart');

      this.route('admin', function () {
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
      this.route('products', { path: 'products/:itemId' });
    });
    this.route('upload');
  });

  exports['default'] = Router;
});