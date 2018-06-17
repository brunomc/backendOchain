var ProductContract = require('../config/EthereumSetup.js');
var Product = require('../models/Product');

exports.save = function(nameProduct,productionDate,manufacturer,trackerProgress,callback){
	
	var  result = ProductContract.registerProduct(
		nameProduct,
		productionDate,
		manufacturer,
		trackerProgress,{from:'0x106807d5c1bc1e3d9D2f4Ed219643322b2da6669'});
	console.log(result);
	

};

exports.delete = function(callback){
   
	Product.remove(function(error){
	 	if(!error){
	 		callback([]);
	 		console.log("DB Clean!");
	 	}else{
	 		callback({resposta:"Não foi possivel limpar o DB"});
	 	}
	 });

}

exports.list = function(callback){
	var data = ProductContract.getProduct();
	callback(data);

};



