function SoundEngine(channels){
	this.channels = channels;
	this.audiolet = SingleAudiolet.getInstance();
	this.isPlaying = false;
}

SoundEngine.prototype.playSequence = function (){
	var numberOfChannels = this.channels.length;
	for (var i=0; i<numberOfChannels; i++) {
		this.channels[i].play();
	}
	this.isPlaying = true;
	var pat = new PSequence([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], Infinity);
	this.playEvent = this.audiolet.scheduler.play([pat],0.25,
		function(pat) {
			console.log(this.channels);
			if (pat === 1) {
				if(numberOfChannels < this.channels.length){
					for (var i=numberOfChannels; i<this.channels.length; i++) {
						this.channels[i].play();
					}
					numberOfChannels = this.channels.length;
				}
			}
		}.bind(this)
	);
}

SoundEngine.prototype.setTempo = function  (newTempo){
		this.audiolet.scheduler.setTempo(newTempo);
	}
	
SoundEngine.prototype.stop = function  (){
	for (var i=0; i<this.channels.length; i++) {
			this.channels[i].stop();
		}
	this.isPlaying = false;
}
