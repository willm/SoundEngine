exports.handle = function(req, res){
		var fs = require('fs'),
			path = require('path');

		fs.readdir(path.join(__dirname,'views','samples'), function(err, files){
			if(err){
				console.log(err);
			}
			res.send(files);
		});

}
