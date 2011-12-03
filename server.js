var express = require('express'),
	path = require('path'),
	fs = require('fs'),
	server;

server = express.createServer();

server.configure(function configureAppAndMiddleware() {
	server.set('view engine', 'jade');
	server.set('view', path.join(__dirname,'views'));
	server.use(express['static'](__dirname + '/views'));
});


server.get('/', function showHomePage(req, res) {
	res.render('index.jade', {layout:false});
});

server.get('/samples', function  (req, res){
	fs.readdir(path.join(__dirname,'views','samples'), function(err, files){
		if(err){
			console.log(err);
		}
		console.log(files);
		res.send(files);
	});
});



server.listen(8080);

console.log('Running on 8080');
