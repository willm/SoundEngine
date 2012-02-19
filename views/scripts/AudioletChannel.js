var AudioletChannel = function (numberOfTicks){
	this.numberOfTicks = numberOfTicks;
	this.audiolet = SingleAudiolet.getInstance();
	this.hits = [];
	this.playEvent;
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = new Hit();
	}
	this.div = this.setUpDiv();
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
}

AudioletChannel.prototype.stop = function  (){
	this.audiolet.scheduler.stop(this.playEvent);
}

AudioletChannel.prototype.setUpDiv = function  (numberOfTicks){
	var div = $('<div>').attr('class', 'row channel'),
		that = this;
		getControls = function  (){
			controls = $('<div class="controls">').css('float', 'left');
			controls.append(new SampleList(that));
			controls.append($('<br><br>'));
			controls.append(new VolumeSlider(that));
			return controls;
		}
	div.append(getControls());
	
	for(var i=0; i<this.numberOfTicks; i++){
		div.append(this.hits[i].div);
	}
	div.append($('<br>'));
	div.append(new PitchDiv(this));
	$('#channels').append(div);
	
	return div;
}
