var Backbone = require('backbone');

var Config = require('../../config.js');


var BaseCollection = Backbone.Collection.extend({

	baseUrl: Config.urls.API_URL,

	parse: function(response, options) {
		return response.results;
	}
});

module.exports = BaseCollection;
