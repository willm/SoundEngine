function AudioletChannel (numberOfTicks){
	this.audiolet = SingleAudiolet.getInstance();
	this.hits = [];
	this.playEvent;
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = new Hit();
	}
}

AudioletChannel.prototype.setHit = function(tick){
	this.hits[tick].set();
}

AudioletChannel.prototype.loadBuffer = function(url) {
	this.buffer = new AudioletBuffer(1, 0);
	this.buffer.load(url, false);
	this.player = new BufferPlayer(this.audiolet, this.buffer, 1, 0, 0);
	this.trigger = new TriggerControl(this.audiolet,1);
	this.trigger.connect(this.player, 0, 1);
	this.gain = new Gain(this.audiolet, 1.0);
	this.player.connect(this.gain);
	this.gain.connect(this.audiolet.output);
}

AudioletChannel.prototype.setVolume = function  (volume){
	this.gain.gain.setValue(volume);
}

AudioletChannel.prototype.playSound = function (time) {
	this.trigger.trigger.setValue(1);
	}
	
AudioletChannel.prototype.setPitch =function  (pitch){
	this.player.playbackRate.setValue(pitch);
}
	
AudioletChannel.prototype.play = function (){
	var pattern = new PSequence(this.hits, Infinity);
		
	this.playEvent = this.audiolet.scheduler.play([pattern],0.25,
		function(pattern) {
			if (pattern.isOn) {
				this.setPitch(pattern.pitch);
				this.playSound();
			}
		}.bind(this)
	);
	console.log(this.playEvent);
}

AudioletChannel.prototype.stop = function  (){
	this.audiolet.scheduler.stop(this.playEvent);
}
