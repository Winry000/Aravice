define('ararice/components/ara-shoppingcar-card', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		addCart: _ember['default'].inject.service('add-cart')
	});
});