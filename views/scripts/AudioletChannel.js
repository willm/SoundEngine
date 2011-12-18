function AudioletChannel (numberOfTicks){
	this.audiolet = SingleAudiolet.getInstance();;
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
	

//	var SchedulerApp = function() {
//		this.audiolet = SingleAudiolet.getInstance();
//		var channel = new AudioletChannel(8);
//		var pattern = new PSequence([1,1,1,1], Infinity);
//		this.audiolet.scheduler.play([pattern],0.25,function(pattern) {
//		console.log(pattern);
//		if(pattern === 1)
//			channel.playSound();
//	  }.bind(this)
//);
//			}

//	SchedulerApp();
