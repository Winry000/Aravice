define('ararice/upload/controller', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			addProduct: function addProduct() {
				var title = this.get('title');
				var stock = this.get('stock');
				var description = this.get('description');
				var images = this.get('images');

				//Create New Task
				var newProduct = this.store.createRecord('post', {
					title: title,
					stock: stock,
					description: description,
					images: images
				});
				//save to firebase
				newProduct.save();

				this.setProperties({
					title: '',
					stock: '',
					description: '',
					images: ''

				});
				alert('upload success...');
			}
		}
	});
});