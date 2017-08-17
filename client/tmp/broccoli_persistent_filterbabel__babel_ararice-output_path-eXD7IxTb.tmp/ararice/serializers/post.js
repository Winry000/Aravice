define('ararice/serializers/post', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].RESTSerializer.extend({
		normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
			payload = { posts: payload };
			return this._super(store, primaryModelClass, payload, id, requestType);
		}
	});
});