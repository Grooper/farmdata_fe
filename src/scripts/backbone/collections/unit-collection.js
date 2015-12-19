var BaseCollection = require('collections/base-collection.js');
var UnitModel = require('models/unit-model.js');


class UnitCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'units/',

	model: UnitModel
};

module.exports = UnitCollection;
