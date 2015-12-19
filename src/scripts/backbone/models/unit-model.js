var BaseModel = require('models/base-model.js');


class UnitModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'units/',

	defaults: {
        id: null,
        name: null
	}
};

module.exports = UnitModel;
