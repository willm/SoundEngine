$(function(){
	var soundEngine,
		tickElements,
		channelElements = $('.channel'),
		channels = [],
		tempo = $('#tempo').text();

	
	
	setUpPlayButton ();
	
	hookUpChannels();
	
	soundEngine = new SoundEngine(tempo, channels);
	
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
		var samplePath;
	
		for (var i=0; i<channelElements.length; i++ ) {
			tickElements = $(channelElements[i]).children('.tick');
			samplePath = $(channelElements[i]).children('.sample_path').text();
			channels[i] = new Channel(tickElements.length);
			channels[i].loadBuffer(samplePath);
			for (var j=0; j<tickElements.length; j++) {
				$(tickElements[j]).click(function(channel, tick){
					return function  (){
						channel.setHit(tick);
						console.log('channel: '+channel+'tick: '+tick);
						toggle($(this));
					};
				}(channels[i],j));
			}
		}
	}
	
	function startStop (){
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
