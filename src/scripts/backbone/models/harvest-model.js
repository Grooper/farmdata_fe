var BaseModel = require('models/base-model.js');


class HarvestModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'harvests/',

	defaults: {
        id: null,
        date: null,
        amount: 0,
        hours: 0,
        gen: null,
        comments: null,
        user: null,
        field: null,
        crop: null,
        unit: null
	}
};

module.exports = HarvestModel;
