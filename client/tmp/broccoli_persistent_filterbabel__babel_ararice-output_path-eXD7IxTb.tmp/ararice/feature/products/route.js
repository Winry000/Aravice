define('ararice/feature/products/route', ['exports', 'ember'], function (exports, _ember) {
     exports['default'] = _ember['default'].Route.extend({
          model: function model(params) {
               var ws = this.modelFor('collections');
               return this.store.peekRecord('post', params.itemId);
          }

     });
});
// model: function(params) {
// 	var ws  = this.modelFor('feature'); 
//   var route = this;
//   return this.store.find('post', params.itemId).then(
//     function(succ){
//       return succ;
//     },
//     function(error){
//       route.transitionTo('feature.products');
//     });
// }