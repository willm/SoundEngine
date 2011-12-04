function SynthChannel (numberOfTicks, tempo){
	this.hits = [];
	this.buffer;
	this.synth = new SchedulerApp(160);
	
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = 0;
	}
}

SynthChannel.prototype.setHit = function(tick){
	this.hits[tick] = this.hits[tick] === 0 ? 1 : 0;
}

SynthChannel.prototype.playSound = function (time, freq) {
		this.synth.note(time,('C'+freq));
	}
