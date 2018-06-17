var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema({

	nameProduct: String,
	productionDate: String,
	manufacturer: String,
	trackerProgress: String
	
});

module.exports = mongoose.model('Product',ProductSchema);