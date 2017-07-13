import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addProduct: function() {
			var title = this.get('title');
			var stock = this.get('stock');
			var description = this.get('description');
			var images = this.get('images');

			//Create New Task
			var newProduct = this.store.createRecord('post',{
				title: title,
				stock: stock,
				description: description,
				images: images,
			})
			//save to firebase
			newProduct.save();

			
			this.setProperties({
				title:'',
				stock:'',
				description:'',
				images:'',

			}) 
			alert('upload success...');
		}
	}
});