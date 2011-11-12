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
	
	$('a').click(function (){
		if (soundEngine.isPlaying){
			console.log('stop');
			soundEngine.isPlaying = false;
			clearInterval(soundEngine.playing);
		}
		else {
			soundEngine.isPlaying = true;
			soundEngine.setStartTime();
			soundEngine.playSequence(channels);
		}
		
	});

	function toggle (element){
		var isOn = element.css('background-color') !== 'rgb(255, 0, 0)';
		if(isOn)
			element.css('background-color', 'red');
		else 
			element.css('background-color', 'transparent');
	}
});
