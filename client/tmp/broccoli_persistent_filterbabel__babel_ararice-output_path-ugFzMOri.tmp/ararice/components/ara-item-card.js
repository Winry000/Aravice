define('ararice/components/ara-item-card', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		onsale: (function () {
			return this.get('onsale') == 1;
		}).property('onsale')
	});
});