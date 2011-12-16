function AudioletChannel (numberOfTicks, audiolet){
	this.audiolet = audiolet;
	this.hits = [];
	this.buffer = new AudioletBuffer(1, 0);
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = 0;
	}
}

AudioletChannel.prototype.setHit = function(tick){
	this.hits[tick] = this.hits[tick] === 0 ? 1 : 0;
}

AudioletChannel.prototype.loadBuffer = function(url) {
	this.buffer.load(url, false);
	this.player = new BufferPlayer(this.audiolet, this.buffer, 1, 0, 0);
	this.trigger = new TriggerControl(this.audiolet,1);
	this.trigger.connect(this.player, 0, 1);
	this.player.connect(this.audiolet.output);
}

AudioletChannel.prototype.playSound = function (time) {
	this.trigger.trigger.setValue(1);
	}
	
/*	
	var SchedulerApp = function() {
		this.audiolet = new Audiolet();
		var synth = new AudioletChannel(8,this.audiolet);
		// Play one note on beat 0
		var duration = new PSequence([0.5], Infinity);
		var pattern = new PSequence([1,0.5,0.75,1,1,0,1,1,1,1], Infinity)
		this.audiolet.scheduler.play([pattern],duration,function(pattern) {
        // apply amplitude
        console.log(pattern);
        if(ser === 1)
        	synth.playSound();
      }.bind(this)
    );
			}

	new SchedulerApp();
*/
