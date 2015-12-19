var BaseModel = require('models/base-model.js');


class FarmModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'farms/',

	defaults: {
        id: null,
        name: null,
        email: null,
        signature: null,
        location: null,
        owner: null
	}
};

module.exports = FarmModel;
