$(function(){
	var ticks = $('.tick');

	$('.tick').click(function(evt){
		var element = $(evt.currentTarget);
		toggle(element);
	});


	function toggle (element){
		var isOn = element.css('background-color') !== 'rgb(255, 0, 0)';
	
		if(isOn)
			element.css('background-color', 'red');
		else 
			element.css('background-color', 'transparent');
	}
});
