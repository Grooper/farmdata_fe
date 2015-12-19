var Backbone = require('backbone');


var BaseCollection = Backbone.Collection.extend({

	baseUrl: 'http://localhost:9000/api/',

	parse: function(response, options) {
		return response.results;
	}
});

module.exports = BaseCollection;
