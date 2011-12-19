function AudioletChannel (numberOfTicks){
	this.audiolet = SingleAudiolet.getInstance();
	this.hits = [];
	this.playEvent;
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = {isOn : 0};
	}
	this.hits[0].first = true;
}

AudioletChannel.prototype.setHit = function(tick){
	this.hits[tick].isOn = this.hits[tick].isOn === 0 ? 1 : 0;
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
	//trigger -> player -> gain -> audiolet
}

AudioletChannel.prototype.setVolume = function  (volume){
	this.gain.gain.setValue(volume);
}

AudioletChannel.prototype.playSound = function (time) {
	this.trigger.trigger.setValue(1);
	}
	
AudioletChannel.prototype.play = function (){
	var pattern = new PSequence(this.hits, Infinity);
		
	this.playEvent = this.audiolet.scheduler.play([pattern],0.25,
		function(pattern) {
			if (pattern.isOn === 1) {
			  this.playSound();
			}
		}.bind(this)
	);
	console.log(this.playEvent);
}

AudioletChannel.prototype.stop = function  (){
	this.audiolet.scheduler.stop(this.playEvent);
}
