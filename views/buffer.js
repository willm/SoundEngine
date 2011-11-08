function SoundEngine(){
	var me = this;
	this.list;
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
	
	this.playBar = function (bufferList, kicks){
		var kick = bufferList[0];
		var snare = bufferList[1];
		var hihat = bufferList[2];
		var startTime = this.context.currentTime + 0.100;
		var tempo = 160; // BPM (beats per minute)
		var eighthNoteTime = (60 / tempo) / 2;
		
		for (var bar = 0; bar < 16; bar++) {
			var time = startTime + bar * 8 * eighthNoteTime;
			for (var i=0; i < kicks.length; i++) {
				if(kicks[i]){
					this.playSound(kick,(time)+i * eighthNoteTime);
				}
			}
		}
	}
}
