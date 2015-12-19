var BaseModel = require('models/base-model.js');


class FieldModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'fields/',

	defaults: {
        id: null,
        name: null,
        size: 0,
        number_of_beds: 0,
        length: 0,
        active: false
	}
};

module.exports = FieldModel;
