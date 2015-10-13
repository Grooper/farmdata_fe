var Backbone = require('backbone');
var FoodModel = require('../models/food-model.js');

var FoodCollection = Backbone.Collection.extend({
	urlRoot: 'http://localhost:9000/api/foods/',

	url: function() {
		if (this.get('id')) {
			return this.urlRoot + this.id + '/';
		} else {
			return this.urlRoot;
		}
	},

	model: FoodModel
});

module.exports = FoodCollection;
