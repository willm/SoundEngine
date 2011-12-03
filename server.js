var express = require('express'),
	path = require('path'),
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


server.listen(31052);

console.log('Running on 31052');
