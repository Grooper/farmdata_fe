var BaseModel = require('models/base-model.js');


class ConfigurationModel extends BaseModel {

	urlRoot: BaseModel::baseUrl + 'configurations/',

	defaults: {
        id: null,
        notes: true,
        labor: true,
        seed_order: true,
        harv_list: true,
        soil: true,
        fertility: true,
        cover: true,
        compost: true,
        fertilizer: true,
        liquid_fertilizer: true,
        dry_fertilizer: true,
        tillage: true,
        spraying: true,
        back_spray: true,
        tractor_spray: true,
        scouting: true,
        insect: true,
        weed: true,
        disease: true,
        irrigation: true,
        pump: true,
        sales: true,
        sales_packing: true,
        sales_invoice: true,
        bedft: true,
        gens: true,
        num_top: true,
        num_harvest: true,
        num_soil: true,
        num_fertility: true,
        num_fertilizer: true,
        num_spray: true,
        num_scout: true,
        num_admin: true,
        num_add: true,
        num_add_crop: true,
        num_add_equip: true,
        num_add_soil: true,
        num_add_species: true,
        num_add_other: true,
        num_edit: true,
        num_edit_soil: true,
        num_edit_soil_fertility: true,
        num_edit_soil_material: true,
        num_edit_other: true,
        num_view_graphs: true,
        num_sales: true,
        num_add_sales: true,
        num_edit_sales: true,
        farm: null
	}
}

module.exports = ConfigurationModel;
