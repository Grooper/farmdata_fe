var BaseCollection = require('collections/base-collection.js');
var DirectSeedingModel = require('models/direct-seeding-model.js');


class DirectSeedingCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'direct-seeding/',

	model: DirectSeedingModel
};

module.exports = DirectSeedingCollection;
