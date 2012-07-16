function UploadHandler(){}

exports.handle = function(req, res){
var formidable = require("formidable"),
		fs = require('fs'),
		path = require('path');

	var filePath;
	var form = new formidable.IncomingForm();

	form.uploadDir = path.join(__dirname, 'views','samples');
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
}
