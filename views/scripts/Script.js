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
	
	setUpAddTrackButton ();
	
	hookUpChannels();
	
	
	
//---------------------ADD TRACK BUTTON

	function setUpAddTrackButton (){
		var addtrackbutton = $('#add_track');

		addtrackbutton.button({
			icons: {primary: "ui-icon-plusthick"},
			text : false
		});
		
		addtrackbutton.click(function  (){
			var newChannel = new ChannelDiv(8);
			channelElements.push(newChannel);
			channels.push(newChannel.channel);
		});
	}

	
	function hookUpChannels (){
		for (var i=0; i<channelElements.length; i++ ) {
			channels.push(channelElements[i].channel);
			console.log(channels[i]);
		}
		soundEngine = new SoundEngine(tempo, channels);
		new PlayButton(soundEngine);
	}
	

});
