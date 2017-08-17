define('ararice/feature/login/controller', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _ember['default'].Controller.extend({
    authManager: _ember['default'].inject.service('session'),

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        // let { identification, password } = this.getProperties('identification', 'password');
        // this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        //   this.set('errorMessage', reason.error || reason);
        // });
        var email = this.get('email');
        var password = this.get('password');
        var data = {
          email: email,
          password: password
        };
        this.get('authManager').authenticate('authenticator:oauth2', data)['catch'](function (reason) {
          _this.set('errorMessage', reason.error || reason);
        });
      }
    }
  });
});