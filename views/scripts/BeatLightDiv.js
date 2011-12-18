function BeatLightDiv (numberOfTicks){
	this.ticks = numberOfTicks;
	this.channel = new MetronomeChannel(this.ticks);
	this.div = $('<div>').attr('class', 'row channel');
	this.count =0;
	
	this.div.append($('<div>').css('width', '200px').css('float','left').text('Your Song:'));
	for(var i=0; i<this.ticks; i++){
		this.div.append($('<div>').attr('class', 'tick'));
	}
	this.lightUp(0);
	$('#channels').append(this.div);
	
	$(document).bind('nextBeat', function  (evt,data){
			this.lightUp(data);
		}.bind(this));

}

BeatLightDiv.prototype.lightUp = function (beat){
		$(this.div.children(".tick")).css('background-color', 'transparent');
		$(this.div.children(".tick")[beat]).css('background-color', 'yellow');
	}
