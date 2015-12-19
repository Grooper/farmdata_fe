var BaseCollection = require('collections/base-collection.js');
var HarvestModel = require('models/harvest-model.js');


class HarvestCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'harvests/',

	model: HarvestModel
};

module.exports = HavestCollection;
