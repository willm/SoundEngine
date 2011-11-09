function SoundEngine(bpm, kicks){
	this.tempo = bpm; // BPM (beats per minute)
	
	this.eighthNoteTime = (60 / this.tempo) / 2;
	this.kicks = kicks;
	var me = this;
	this.isPlaying = false;
	this.list;
	this.barCount = 0;
	this.context = new webkitAudioContext();
	this.bufferLoader = new BufferLoader(this.context,
			['kick.wav',
			'snare.wav',
			'808 highhat.wav'],
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
		
	this.playBar = function (){
		var kick = this.list[0];
		
		var time = this.startTime + this.barCount * 8 * this.eighthNoteTime;
		for (var i=0; i < this.kicks.length; i++) {
			if(this.kicks[i]){
				this.playSound(kick,(time)+i *this.eighthNoteTime);
			}
		}
	}
	
	this.playSequence = function (bufferList){
		return function(that){
				that.playing=setInterval(function(){
				console.log('bar : ',that.barCount);
				that.playBar();
				that.barCount++;
			},(8000 * that.eighthNoteTime));
		}(this);
	}
	
	this.setStartTime = function  (){ 
		this.startTime = this.context.currentTime + 0.100;
	}
	
}
