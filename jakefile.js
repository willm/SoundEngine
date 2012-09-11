var	fs = require('fs'),
	exec = require('child_process').exec,
	sys = require('sys'),
	path = require('path');

	var getJsFiles = function(dir){
		var jsFiles = '',
			files = fs.readdirSync(dir);

		for(var i =0; i<files.length; i++){
			if(path.extname(files[i]) === '.js')
				jsFiles += dir + files[i] + ' ';
		}
		return jsFiles;
	};

desc('concatonate client scripts');
task('default', [], function(){
	var dir = 'views/scripts/',
		 allJsFiles = []
		filesToCombine = '';

	fs.exists(dir,function(exists){
		if(exists){
			fs.mkdir(dir);
		}
	});

	allJsFiles = getJsFiles(dir) + getJsFiles('views/scripts/UI/');
	exec ('cat ' +  allJsFiles + ' > ' + dir + 'master/master.js',
	function (error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
})
