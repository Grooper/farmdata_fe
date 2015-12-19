var BaseCollection = require('collections/base-collection.js');
var FieldModel = require('models/field-model.js');


class FieldCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'fields/',

	model: FieldModel
};

module.exports = FieldCollection;
