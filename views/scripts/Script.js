$(function(){
	var soundEngine;
	var tickElements;
	var channelElements = $('.channel');
	var channels = [];
	var tempo = $('#tempo').text();

	soundEngine = new SoundEngine(tempo);
	
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
				$(this).button({icons:{primary:'ui-icon-stop'}})
			else
				$(this).button({icons:{primary:'ui-icon-play'}})
		});
		
		$(window).keypress(function  (e){
			var spaceBar = (e.keyCode === 0 || e.keyCode === 32);
			if (spaceBar){
				$('#play_pause').trigger('click');
				e.stopPropagation();
			}
		})
	}
	
	function hookUpChannels (){
		for (var i=0; i<channelElements.length; i++ ) {
			tickElements = $(channelElements[i]).children('.tick');
			channels[i] = new Channel(tickElements.length);
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
