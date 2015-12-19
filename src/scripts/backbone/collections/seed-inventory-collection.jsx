var BaseCollection = require('collections/base-collection.js');
var SeedInventoryModel = require('models/harvest-model.js');


class SeedInventoryCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'seed-inventories/',

	model: SeedInventoryModel
};

module.exports = SeedInventoryCollection;
