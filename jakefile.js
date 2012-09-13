var fs = require('fs'),
	exec = require('child_process').exec,
	sys = require('sys'),
	path = require('path');

var getJsFiles = function(dir){
	var combinedJsFiles = '',
		files = fs.readdirSync(dir);

	files.forEach(function(file, i){
			if(path.extname(file) === '.js')
				combinedJsFiles += fs.readFileSync(dir + file).toString();
		});
	return combinedJsFiles;
};

var combineAllJsFiles = function(outDir){
	var dir = 'views/scripts/',
		allJsFiles = '';
	allJsFiles = getJsFiles(dir) + getJsFiles(dir+'UI/');
	fs.writeFileSync(outDir +'/master.js',allJsFiles);
}

var createIfNotExists = function(dir,cb){
	fs.exists(dir,function(exists){
		if(!exists)
			fs.mkdirSync(dir);
		cb(dir);
	});
}

desc('concatonate client scripts');
task('combine', [], function(){
	createIfNotExists('views/scripts/master/',combineAllJsFiles);
})

