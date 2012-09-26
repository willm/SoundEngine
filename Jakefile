var fs = require('fs'),
	exec = require('child_process').exec,
	sys = require('sys'),
	path = require('path'),
	uglify = require('uglify-js'),
	Browser = require('zombie'),
	util = require('util');

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

var getTestTitle = function(failedSpecElement){
	return failedSpecElement.childNodes[1].innerHTML;
}

var getTestStackTrace = function(failedSpecElement){
	return failedSpecElement.childNodes[2].childNodes[1].innerHTML;
}

desc('run client unit tests');
task('test',[], function(){
	var browser = new Browser();
	var url = 'file://' + __dirname + '/tests/SpecRunner.html';
	console.log("running tests from : " + url);
	browser.visit(url, function(){
		var testsFailed = browser.queryAll('.spec.failed');
		if(testsFailed.length != 0){
			console.log(testsFailed.length + ' tests failed\r\n');
			testsFailed.forEach(function(testFailed){
				console.log(getTestTitle(testFailed));
				console.log(getTestStackTrace(testFailed) + '\r\n');
				throw "client tests failed";
			});
		}
	});
});

desc('concatonate client scripts');
task('combine', ['views/scripts/master/'], function(){
	var outDir = 'views/scripts/master/';
	var allJsFiles = combineAllJsFiles();
	var parsedUglifiedFiles = uglify.parser.parse(allJsFiles);
	console.log('minifying js files to ' + outDir);
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
