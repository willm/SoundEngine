$(function(){
	var soundEngine;
	var ticks = $('.kick .tick');
	var hits = [];
	
	for (var i=0; i<ticks.length; i++) {
		hits[i] = 0;
		$(ticks[i]).click(function(x){
			return function  (){
				hits[x] = hits[x] === 0 ? 1 : 0;
				toggle($(this));
			};
		}(i));
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
