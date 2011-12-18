function SoundEngine(channels){
	this.channels = channels;
	this.division = 0.5;
	this.audiolet = SingleAudiolet.getInstance();
	this.isPlaying = false;
		
	this.playSequence = function (){
		for (var i=0; i<this.channels.length; i++) {
			this.channels[i].play();
		}
	}
	
	this.setStartTime = function  (){
		this.audiolet.scheduler.stop();
	}
}

SoundEngine.prototype.setTempo = function  (newTempo){
		this.tempo = newTempo;
	}
