import DS from 'ember-data';

DS.RESTAdapter.extend({
    headers: {
	"header" : "myheader"
    }
});
export default DS.RESTAdapter.extend({
	//host: "http://localhost:5000",
	host: "https://a-simple-node-server.herokuapp.com",
	pathforType() {
		return 'posts'
	}
});