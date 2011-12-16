$(function(){
	var soundEngine,
		channelElements = [new ChannelDiv(8)],
		channels = [];
		
	new UploadWindow();
	
	new AddTrackButton(channelElements, channels);
	
	hookUpChannels();
	
	function hookUpChannels (){
		for (var i=0; i<channelElements.length; i++ ) {
			channels.push(channelElements[i].channel);
			console.log(channels[i]);
		}
		soundEngine = new SoundEngine(channels);
		new PlayButton(soundEngine);
		new TempoSelector(soundEngine);
	}
	
});

String.prototype.getExtension = function(){
	return this.substring(this.lastIndexOf(".")+1).toLowerCase();
}
