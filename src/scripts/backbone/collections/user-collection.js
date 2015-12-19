var BaseCollection = require('collections/base-collection.js');
var UserModel = require('models/user-model.js');


class UserCollection extends BaseCollection {

	urlRoot: BaseCollection::baseUrl + 'users/',

	model: UserModel
};

module.exports = UserCollection;
