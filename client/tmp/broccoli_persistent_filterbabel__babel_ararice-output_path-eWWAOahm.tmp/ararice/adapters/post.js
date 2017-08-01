define('ararice/adapters/post', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTAdapter.extend({
		host: "https://jsonplaceholder.typicode.com",
		pathforType: function pathforType() {
			return 'posts';
		}
	});
});