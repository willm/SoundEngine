var express = require('express'),
	path = require('path'),
	server;

server = express.createServer();

server.configure(function configureAppAndMiddleware() {

	server.use(express['static'](__dirname + '/views'));
});


/*server.get('/', function showHomePage(req, res) {
	res.render('page.html');
});*/


server.listen(8080);

console.log('Running on 8080');
