var SampleManager = function  (){
	this.audiolet = SingleAudiolet.getInstance();
}

SampleManager.prototype.load = function(url){
	this.buffer = new AudioletBuffer(1, 0);
	this.buffer.load(url, false);
	this.player = new BufferPlayer(this.audiolet, this.buffer, 1, 0, 0);
	this.trigger = new TriggerControl(this.audiolet,1);
	this.trigger.connect(this.player, 0, 1);
	this.gain = new Gain(this.audiolet, 1.0);
	this.player.connect(this.gain);
	this.gain.connect(this.audiolet.output);
}

SampleManager.prototype.changeVolume = function (volume){
	this.gain.gain.setValue(volume);
}

SampleManager.prototype.play = function (){
	this.trigger.trigger.setValue(1);
}

SampleManager.prototype.setPitch = function (pitch){
	this.player.playbackRate.setValue(pitch);
}
