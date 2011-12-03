$(function(){
	var soundEngine,
		tickElements,
		channelElements = [new ChannelDiv(8,"samples/perc2.wav")],
		channels = [],
		tempo = $('#tempo').text();
	
	
	setUpPlayButton ();
	
	hookUpChannels();

	
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
	
	function hookUpChannels (){
		for (var i=0; i<channelElements.length; i++ ) {
			channelElements[i].hookUpChannel();
			channels.push(channelElements[i].channel);
			console.log(channels[i]);
		}
		soundEngine = new SoundEngine(tempo, channels);
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

	function toggle (element){
		var isOn = element.css('background-color') !== 'rgb(255, 0, 0)';
		if(isOn)
			element.css('background-color', 'red');
		else 
			element.css('background-color', 'transparent');
	}
});
