$(function(){
	var soundEngine;
	var ticks;
	var hits = [[],[],[],[]];
	var channels = $('.channel');
	for (var i=0; i<channels.length; i++ ) {
		ticks = $(channels[i]).children();
		for (var j=0; j<ticks.length; j++) {
			hits[i][j] = 0;
			$(ticks[j]).click(function(channel, tick){
				return function  (){
					console.log('channel: '+channel+'tick: '+tick);
					hits[channel][tick] = hits[channel][tick] === 0 ? 1 : 0;
					toggle($(this));
				};
			}(i,j));
		}
	}
	
	soundEngine = new SoundEngine(130,hits);
	
	$('a').click(function (){
		if (soundEngine.isPlaying){
			console.log('stop');
			soundEngine.isPlaying = false;
			clearInterval(soundEngine.playing);
		}
		else {
			soundEngine.isPlaying = true;
			soundEngine.setStartTime();
			soundEngine.playSequence(hits);
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
