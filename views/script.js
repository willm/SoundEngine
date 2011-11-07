$(function(){
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

	function toggle (element){
		var isOn = element.css('background-color') !== 'rgb(255, 0, 0)';
	
		if(isOn)
			element.css('background-color', 'red');
		else 
			element.css('background-color', 'transparent');
	}
});
