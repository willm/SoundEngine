(function  (){
	var express = require('express'),
		uploadHandler = require('./handlers/UploadHandler.js'),
		path = require('path'),
		samplesHandler = require('./handlers/SamplesHandler.js'),
		//mongoose = require('mongoose'),
		server,PatternModel;
//	require('./models/Pattern.js');
//	PatternModel = mongoose.model('PatternModel');

	server = express.createServer();

	server.configure(function configureAppAndMiddleware() {
		server.set('view engine', 'jade');
		server.set('view', path.join(__dirname,'views'));
		server.use(express['static'](__dirname + '/views'));
	});


	server.get('/', function showHomePage(req, res) {
		/*PatternModel.find({songId : 100}, function  (err, doc){
			console.log(doc);
		});*/
		res.render('index.jade', {layout:false});
	
	});

	server.get('/samples', function  (req, res){
		samplesHandler.handle(req, res);
	});

	server.get('/synth', function  (req, res){
		res.render('synth.jade', {layout:false});
	});

	server.post('/upload',function  (req, res){
		uploadHandler.handle(req, res);
	})

	server.listen(8080);

	console.log('Running on 8080');
})();
