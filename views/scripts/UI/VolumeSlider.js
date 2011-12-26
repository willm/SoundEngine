function VolumeSlider (channel){
	this.channel = channel;
	this.div = $('<div>').text('Vol: ');
	var that = this;
	var slider = $('<input>')
		.attr('type', 'range')
		.attr('min', '0')
		.attr('max', '1.01')
		.attr('step', '0.01')
		.change(function  (){
			that.channel.setVolume($(this).val());
		});
	this.div.append(slider);

	return this.div;
}
