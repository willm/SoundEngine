function SoundEngine(channels){
	this.channels = channels;
	this.division = 0.5;
	this.audiolet = SingleAudiolet.getInstance();
	this.isPlaying = false;
		
	this.playSequence = function (){
		for (var i=0; i<this.channels.length; i++) {
			this.channels[i].play();
		}
		this.isPlaying = true;
	}
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
