var BaseCollection = require('collections/base-collection.js');
var UnitConversionModel = require('models/unit-conversion-model.js');


class UnitConversionCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'unit-collections/',

	model: UnitConversionModel
};

module.exports = UnitConversionCollection;
