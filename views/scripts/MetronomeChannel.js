function MetronomeChannel (numberOfTicks){
	this.hits = [];
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = {position : i};
	}
	this.playEvent;
	this. audiolet = SingleAudiolet.getInstance();
}
	
MetronomeChannel.prototype.play = function (){
	console.log(this.hits);
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
