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
	
	setUpPlayButton ();
	
	hookUpChannels();

//---------------------PLAY BUTTON

	function setUpPlayButton (){
		var playbutton = $('#play_pause');
		
		playbutton.button({
			icons: {primary: "ui-icon-play"},
			text : false
		});

		playbutton.click(function (){
			var isPlayButton = $(this).children('.ui-icon-play').length;
			startStop();
			if(isPlayButton)
				$(this).button({icons:{primary:'ui-icon-stop'}});
			else
				$(this).button({icons:{primary:'ui-icon-play'}});
		});
		
		$(window).keypress(function  (e){
			var spaceBar = (e.keyCode === 0 || e.keyCode === 32);
			if (spaceBar){
				$('#play_pause').trigger('click');
				e.stopPropagation();
			}
		});
	}	
	
	function startStop (){
		console.log(soundEngine);
		if (soundEngine.isPlaying){
			console.log('Stop');
			soundEngine.isPlaying = false;
			clearInterval(soundEngine.playing);
		}
		else {
			soundEngine.isPlaying = true;
			soundEngine.setStartTime();
			soundEngine.playSequence(channels);
		}
	}
	
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
	}
	

});
