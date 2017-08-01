define('ararice/models/products', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr('string'),
		stock: _emberData['default'].attr('number'),
		description: _emberData['default'].attr('string'),
		images: _emberData['default'].attr('string')
	});
});