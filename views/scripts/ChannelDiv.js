function ChannelDiv (numberOfTicks){
	this.channel;
	this.ticks = numberOfTicks;
	this.div = $('<div>').attr('class', 'row channel');
	this.channel = new AudioletChannel(this.ticks);
	var controls = $('<div class="controls">')
		.css('float', 'left');
	controls.append(new SampleList(this.channel));
	controls.append($('<br><br>'));
	controls.append(new VolumeSlider(this.channel));
	this.div.append(controls);
	
	for(var i=0; i<this.ticks; i++){
		this.div.append(this.channel.hits[i].div);
	}
	this.div.append($('<br>'));
	this.div.append(new PitchDiv(this.channel));
	$('#channels').append(this.div);
}
