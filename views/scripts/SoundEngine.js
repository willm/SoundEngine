function SoundEngine(channels){
	this.tempo = 160; // BPM (beats per minute)
	this.channels = channels;
	this.eighthNoteTime = (60 / this.tempo) / 2;
	this.isPlaying = false;
	this.list;
	this.barCount = 0;
		
	this.playBar = function (channel){
		console.log('tempo: ' + this.tempo);
		var time = this.startTime + this.barCount * 8 * this.eighthNoteTime;
		for (var i=0; i < channel.hits.length; i++) {
			if(channel.hits[i]){
				console.log((time)+i *this.eighthNoteTime);
				console.log(channel.getName());
				if(channel.getName() === "Channel"){
					channel.playSound((time)+i *this.eighthNoteTime);
					}
				if(channel.getName() === "SynthChannel"){
					console.log('synth' + i);
					channel.playSound(i/4, 3);
				}
			}
		}
	}
	
	this.playSequence = function (){
		return function(that){
				that.playing=setInterval(function(){
					for (var i=0; i<that.channels.length; i++) {
						that.playBar(channels[i]);
					}
					
					that.barCount++;
			},(8000 * that.eighthNoteTime));
		}(this);
	}
	
	this.setStartTime = function  (){
		var context = SEAudioContext.getInstance();
		this.startTime = context.currentTime+ 0.100;
	}
}

SoundEngine.prototype.setTempo = function  (newTempo){
		this.tempo = newTempo;
		this.eighthNoteTime = (60 / this.tempo) / 2;
	}
