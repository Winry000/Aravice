import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	stock: DS.attr('number'),
	description: DS.attr('string'),
	images: DS.attr('string'),
});