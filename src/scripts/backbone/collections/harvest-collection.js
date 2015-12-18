var Backbone = require('backbone');
var HarvestModel = require('../models/food-model.js');

module.exports = Backbone.Collection.extend({
	urlRoot: 'http://localhost:9000/api/harvests/',

	url: function() {
		if (this.get('id')) {
			return this.urlRoot + this.id + '/';
		} else {
			return this.urlRoot;
		}
	},

	parse: function(response) {
		return response.results;
	},

	model: HarvestModel
});
