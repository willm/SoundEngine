exports.handle = function(req, res){
		var fs = require('fs'),
			path = require('path'),
			config = require('../config.js');

		fs.readdir(config.samples_path,function(err, files){
			if(err){
				console.log(err);
			}
			res.send(files);
		});

}
