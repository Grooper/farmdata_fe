var BaseModel = require('models/base-model.js');


class SeedInventoryModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'seed-inventories/',

	defaults: {
        id: null,
        crop: null,
        variety: null,
        year: 0,
        code: null,
        rowFt: 0,
        inInventory: 0
	}
};

module.exports = SeedInventoryModel;
