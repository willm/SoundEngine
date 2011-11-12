function SoundEngine(bpm){
	this.tempo = bpm; // BPM (beats per minute)
	
	this.eighthNoteTime = (60 / this.tempo) / 2;
	var me = this;
	this.isPlaying = false;
	this.list;
	this.barCount = 0;
	this.context = new webkitAudioContext();
	this.bufferLoader = new BufferLoader(this.context,
			['kick.wav',
			'snare.wav',
			'808 highhat.wav',
			'crackle.wav'],
		function (bufferList){
			me.list = bufferList;
		}
	);

	this.bufferLoader.load();
	
	this.playSound = function (buffer, time) {
	  var source = this.context.createBufferSource();
	  source.buffer = buffer;
	  source.connect(this.context.destination);
	  source.noteOn(time);
	}
		
	this.playBar = function (channel, bufferNumber){
		var buffer = this.list[bufferNumber];
		console.log(channel);
		var time = this.startTime + this.barCount * 8 * this.eighthNoteTime;
		for (var i=0; i < channel.hits.length; i++) {
			if(channel.hits[i]){
				this.playSound(buffer,(time)+i *this.eighthNoteTime);
			}
		}
	}
	
	this.playSequence = function (channels){
		return function(that){
				that.playing=setInterval(function(){
					for (var i=0; i<channels.length; i++) {
						that.playBar(channels[i], i);
					}
					
					that.barCount++;
			},(8000 * that.eighthNoteTime));
		}(this);
	}
	
	this.setStartTime = function  (){ 
		this.startTime = this.context.currentTime + 0.100;
	}
	
}
