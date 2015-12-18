var Backbone = require('Backbone');

module.exports = Backbone.Model.extend({
	urlRoot: 'http://localhost:9000/api/harvests/',

	defaults: {
        id: null,
        date: null,
        amount: 0,
        hours: 0,
        gen: null,
        comments: "",
        user: null,
        field: null,
        crop: null,
        unit: null
	},

	url: function() {
		if (this.get('id')) {
			return this.urlRoot + this.id + '/';
		} else {
			return this.urlRoot;
		}
	},
});
