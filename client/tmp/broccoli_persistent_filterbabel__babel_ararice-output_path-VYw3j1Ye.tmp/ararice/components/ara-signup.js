define('ararice/components/ara-signup', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {
			createUser: function createUser() {
				var email = this.get('userEmail');
				var password = this.get('userPassword');

				var user = this.store.createRecord('user', {
					email: email,
					password: password
				});

				user.save();
			}
		}
	});
});