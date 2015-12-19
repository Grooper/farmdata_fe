var BaseCollection = require('collections/base-collection.js');
var FarmModel = require('models/farm-model.js');


class FarmCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'farms/',

	model: FarmModel
};

module.exports = FarmCollection;
