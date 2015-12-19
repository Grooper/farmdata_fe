var BaseModel = require('models/base-model.js');


class DirectSeedingModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'crops/',

	defaults: {
        id: null,
        date: null,
        crop: null,
        field: null,
        bedft: 0,
        comments: null,
        rows_bed: 0,
        hours: 0,
        gen: 0
	}
};

module.exports = DirectSeedingModel;
