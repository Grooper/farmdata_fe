var Backbone = require('Backbone');


var BaseModel = Backbone.Model.extend({

    baseUrl: 'http://localhost:9000/api/',

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
