var Backbone = require('Backbone');

var Food = Backbone.Model.extend({
	urlRoot: 'http://localhost:9000/api/foods/',

	url: function() {
		if (this.get('id')) {
			return this.urlRoot + this.id + '/';
		} else {
			return this.urlRoot;
		}
	},

	defaults: {
		id: null,
		name: null,
		food_group: null,
		calsPerServing: 0
	}
});
