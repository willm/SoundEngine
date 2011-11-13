$(function(){
	var soundEngine;
	var tickElements;
	var channelElements = $('.channel');
	var channels = [];
	
	for (var i=0; i<channelElements.length; i++ ) {
		tickElements = $(channelElements[i]).children();
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
	
	soundEngine = new SoundEngine(130);
	
	$('#play_pause').click(function (){
		startStop();
		console.log($(this).attr('class').indexOf('ui-icon-play') >= 1);
		if($(this).attr('class').indexOf('ui-icon-play') >= 1)
			$(this).removeClass('ui-icon-play').addClass('ui-icon-stop');
		else
			$(this).removeClass('ui-icon-stop').addClass('ui-icon-play');
	});
	
	$(window).keypress(function  (e){
		//0 and 32 are the spacebar
		if (e.keyCode === 0 || e.keyCode === 32){
			$('#play_pause').trigger('click');
			e.stopPropagation();
		}
	})
	
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
