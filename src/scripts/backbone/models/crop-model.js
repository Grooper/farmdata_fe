var BaseModel = require('models/base-model.js');


class CropModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'crops/',

	defaults: {
        id: null,
        name: null,
        active: false,
        default_unit: null
	}
};

module.exports = CropModel;
