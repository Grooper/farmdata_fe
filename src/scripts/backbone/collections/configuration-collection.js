var BaseCollection = require('collections/base-collection.js');
var ConfigurationModel = require('models/configuration-model.js');


class ConfigurationCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'configurations/',

	model: ConfigurationModel
};

module.exports = ConfigurationCollection;
