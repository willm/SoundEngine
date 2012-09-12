var	fs = require('fs'),
	exec = require('child_process').exec,
	sys = require('sys'),
	path = require('path');

	var getJsFiles = function(dir){
		var jsFiles = '',
			files = fs.readdirSync(dir);

		files.forEach(function(file, i){
			if(path.extname(file) === '.js')
				jsFiles += dir + file + ' ';
		});
		return jsFiles;
	};

desc('concatonate client scripts');
task('combine', [], function(){
	var dir = 'views/scripts/',
		allJsFiles = [],
		filesToCombine = '';

	fs.exists(dir,function(exists){
		if(exists)
			fs.mkdir(dir);
	});

	allJsFiles = getJsFiles(dir) + getJsFiles('views/scripts/UI/');
	exec ('cat ' +  allJsFiles + ' > ' + dir + 'master/master.js',
	function (error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
})
