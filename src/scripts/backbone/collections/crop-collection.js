var BaseCollection = require('collections/base-collection.js');
var CropModel = require('models/crop-model.js');


class CropCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'crops/',

	model: CropModel
};

module.exports = CropCollection;
