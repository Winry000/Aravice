define('ararice/routes/application', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        redirect: function redirect() {
            this.transitionTo('feature.home');
        }
    });
});