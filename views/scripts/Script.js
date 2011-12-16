$(function(){
	var soundEngine,
		tickElements,
		channelElements = [new ChannelDiv(8)],
		channels = [],
		tempo = $('.tempo_value').val();
	
		$('.tempo_value').change(function  (){
			soundEngine.setTempo($(this).val());
		});
	new ModalWindow();
	
	new AddTrackButton(channelElements, channels);
	
	hookUpChannels();
	
	
	
//---------------------ADD TRACK BUTTON



	
	function hookUpChannels (){
		for (var i=0; i<channelElements.length; i++ ) {
			channels.push(channelElements[i].channel);
			console.log(channels[i]);
		}
		soundEngine = new SoundEngine(tempo, channels);
		new PlayButton(soundEngine);
	}
	

});
