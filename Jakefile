var fs = require('fs'),
	exec = require('child_process').exec,
	sys = require('sys'),
	path = require('path'),
	uglify = require('uglify-js');

var combineJsFilesInDirectory = function(dir){
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
	return combineJsFilesInDirectory(dir) + combineJsFilesInDirectory(dir+'UI/');
}

desc('concatonate client scripts');
task('combine', ['views/scripts/master/'], function(){
	var outDir = 'views/scripts/master/';
	var allJsFiles = combineAllJsFiles();
	var parsedUglifiedFiles = uglify.parser.parse(allJsFiles);
	var mangledJs = uglify.uglify.ast_mangle(parsedUglifiedFiles);
	var squeezedAndMangledJs = uglify.uglify.ast_squeeze(mangledJs);
	var minifiedJs = uglify.uglify.gen_code(mangledJs);
	fs.writeFileSync(outDir +'master.js',minifiedJs);
})

desc('create output directory');
directory('views/scripts/master/');

task('default', [], function(){
	jake.Task['combine'].invoke();
});
