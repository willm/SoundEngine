function SoundEngine(channels){
	this.channels = channels;
	this.division = 0.5;
	this.audiolet = SingleAudiolet.getInstance();
	this.isPlaying = false;
		
	this.playSequence = function (){
		var channel = this.channels[0],
			pattern = new PSequence(channel.hits, Infinity);
			
		this.audiolet.scheduler.play([pattern],this.division,
			function(pattern) {
				if (pattern === 1) {
				  channel.playSound();
				}
			}.bind(this)
		);
	}
	
	this.setStartTime = function  (){
		this.audiolet.scheduler.stop();
	}
}

SoundEngine.prototype.setTempo = function  (newTempo){
		this.tempo = newTempo;
	}
