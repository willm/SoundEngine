$(function(){
	var soundEngine,
		channelElements = [new BeatLightDiv(16)],
		channels = [];
		
	new UploadWindow();
	
	new AddTrackButton(channelElements, channels, 16);
	
	for (var i=0; i<channelElements.length; i++ ) {
		channels.push(channelElements[i].channel);
	}
	soundEngine = new SoundEngine(channels);
	new PlayButton(soundEngine);
	new TempoSelector(soundEngine);
	
});

String.prototype.getExtension = function(){
	return this.substring(this.lastIndexOf(".")+1).toLowerCase();
}
