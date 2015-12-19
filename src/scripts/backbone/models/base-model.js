var Backbone = require('Backbone');

var Config = require('../../config.js');


var BaseModel = Backbone.Model.extend({

    baseUrl: Config.urls.API_URL,

	url: function() {
		if (this.get('id')) {
			return this.baseUrl + this.id + '/';
		} else {
			return this.baseUrl;
		}
	},

    defaults: {
        id: null
    }
});

module.exports = BaseModel;
