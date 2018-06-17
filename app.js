var app = require('./config/app_config');
var productController = require('./controllers/productController');

app.get('/', function(req,res){

	res.end("API Ochain Tracker Products")
	
});
app.delete('/api/data/clean', function(req,res){

	cursoController.delete(function(resp){
		res.json(resp);
	})
	
});

app.get('/api/data/products',function(req,res){

	productController.list(function(resp){

		res.json(resp);
	});

});

app.post('/api/data/product', function(req,res){

	console.log('post aqui',req.body);
	var nameProduct = req.body.nameProduct;
	var productionDate = req.body.productionDate;
	var manufacturer = req.body.manufacturer;
	var trackerProgress = req.body.trackerProgress;
					
	console.log(trackerProgress);
	
	productController.save(nameProduct,productionDate,manufacturer,trackerProgress,function(resp){
		console.log(resp);
		res.end(resp);

	});


});