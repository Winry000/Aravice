define("ararice/adapters/products", ["exports", "ember-data"], function (exports, _emberData) {

	_emberData["default"].RESTAdapter.extend({
		headers: {
			"header": "myheader"
		}
	});
	exports["default"] = _emberData["default"].RESTAdapter.extend({
		//host: "http://localhost:5000",
		host: "https://a-simple-node-server.herokuapp.com",
		pathforType: function pathforType() {
			return 'posts';
		}
	});
});