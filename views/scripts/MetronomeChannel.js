function MetronomeChannel (numberOfTicks){
	this.numberOfTicks = numberOfTicks;
	this.hits = [];
	this.div = this.setUpDiv();
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = {position : i};
	}
	this.playEvent;
	this.audiolet = SingleAudiolet.getInstance();
}
	
MetronomeChannel.prototype.play = function (){
	var pattern = new PSequence(this.hits, Infinity);
		
	this.playEvent = this.audiolet.scheduler.play([pattern],0.25,
		function(pattern) {
			$(document).trigger('nextBeat', pattern.position);
		}.bind(this)
	);
}

MetronomeChannel.prototype.stop = function  (){
	this.audiolet.scheduler.stop(this.playEvent);
}

MetronomeChannel.prototype.setUpDiv = function (){
	var div = $('<div>').attr('class', 'row channel'),
		lightUp = function (beat){
			$(div.children(".tick")).css('background-color', 'transparent');
			$(div.children(".tick")[beat]).css('background-color', 'yellow');
		};
		
	div.append($('<div>').css('width', '200px').css('float','left').text('Your Song:'));
	for(var i=0; i<this.numberOfTicks; i++){
		div.append($('<div>').attr('class', 'tick'));
	}
	lightUp(0);
	$('#channels').append(div);
	
	$(document).bind('nextBeat', function  (evt,data){
			lightUp(data);
		}.bind(this));
	return div;
}


