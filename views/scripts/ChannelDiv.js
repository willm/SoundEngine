var ChannelDiv = function  (numberOfTicks){
	this.channel;
	this.ticks = numberOfTicks;
	this.div = $('<div>').attr('class', 'row channel');
	this.channel = new AudioletChannel(this.ticks);
	
	this.div.append(this.getControls());
	
	for(var i=0; i<this.ticks; i++){
		this.div.append(this.channel.hits[i].div);
	}
	this.div.append($('<br>'));
	this.div.append(new PitchDiv(this.channel));
	$('#channels').append(this.div);
}

ChannelDiv.prototype.getControls = function  (){
	var controls = $('<div class="controls">')
		.css('float', 'left');
	controls.append(new SampleList(this.channel));
	controls.append($('<br><br>'));
	controls.append(new VolumeSlider(this.channel));
	return controls;
}
