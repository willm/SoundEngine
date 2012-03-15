var AudioletChannel = function (numberOfTicks){
	this.numberOfTicks = numberOfTicks;
	this.audiolet = SingleAudiolet.getInstance();
	this.sampleManager = new SampleManager();
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
	this.sampleManager.load(url);
}

AudioletChannel.prototype.setVolume = function  (volume){
	this.sampleManager.changeVolume(volume);
}

AudioletChannel.prototype.playSound = function () {
	this.sampleManager.play();
}
	
AudioletChannel.prototype.setPitch =function  (pitch){
	this.sampleManager.setPitch(pitch);
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
