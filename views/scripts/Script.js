$(function(){
	var soundEngine,
		channels = [new MetronomeChannel(16)];

	new UploadWindow();
	new AddTrackButton(channels, 16);
	
	soundEngine = new SoundEngine(channels);
	new PlayButton(soundEngine);
	new TempoSelector(soundEngine);
	new SavePatternButton(channels);
});

String.prototype.getExtension = function(){
	return this.substring(this.lastIndexOf(".")+1).toLowerCase();
}
