define('ararice/feature/authenticated/route', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			this.transitionTo('feature.home');
		}
	});
});