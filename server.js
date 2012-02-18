(function  (){
	var express = require('express'),
		path = require('path'),
		fs = require('fs'),
		formidable = require('formidable'),
		util=require('util'),
		mongoose = require('mongoose'),
		server,PatternModel;
	require('./models/Pattern.js');
	PatternModel = mongoose.model('PatternModel');

	server = express.createServer();

	server.configure(function configureAppAndMiddleware() {
		server.set('view engine', 'jade');
		server.set('view', path.join(__dirname,'views'));
		server.use(express['static'](__dirname + '/views'));
	});


	server.get('/', function showHomePage(req, res) {
		PatternModel.find({songId : 100}, function  (err, doc){
			console.log(doc);
		});
		res.render('index.jade', {layout:false});
	
	});

	server.get('/samples', function  (req, res){
		fs.readdir(path.join(__dirname,'views','samples'), function(err, files){
			if(err){
				console.log(err);
			}
			res.send(files);
		});
	});

	server.get('/synth', function  (req, res){
		res.render('synth.jade', {layout:false});
	});

	server.post('/upload',function  (req, res){
		var form = new formidable.IncomingForm(),
			filePath;
		form.uploadDir = path.join(__dirname,'views','samples');
		form.keepExtensions = true;
		form.parse(req, function(err, fields, files) {
			if(err){
				console.log(err);
				res.send("error", 500);
			}
			filePath = files.upload.path;
			fs.rename(files.upload.path, path.join(form.uploadDir,files.upload.name.toLowerCase()));
		});

		res.send('ok');
	})


	server.listen(8080);

	console.log('Running on 8080');
})();
