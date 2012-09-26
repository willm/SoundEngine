var Browser = require('zombie');

var getTestTitle = function(failedSpecElement){
	return failedSpecElement.childNodes[1].innerHTML;
}

var getTestStackTrace = function(failedSpecElement){
	return failedSpecElement.childNodes[2].childNodes[1].innerHTML;
}

exports.rub = function(){
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
}
