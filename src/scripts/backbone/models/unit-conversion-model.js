var BaseModel = require('models/base-model.js');


class UnitConversionModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'unit-conversions/',

	defaults: {
        id: null,
        active: false,
        crop: null,
        unit: null,
        default_unit: null
	}
};

module.exports = UnitConversionModel;
