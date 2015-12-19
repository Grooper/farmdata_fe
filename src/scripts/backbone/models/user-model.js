var BaseModel = require('models/base-model.js');


class UserModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'users/',

	defaults: {
        id: null,
        email: null,
        first_name: null,
        last_name: null
	}
};

module.exports = UserModel;
