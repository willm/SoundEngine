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
		this.div.append($('<div>').attr('class', 'tick'));
	}
	this.div.append($('<br>'));
	this.div.append(new PitchDiv(this.channel));
	this.hookUpChannel();
	$('#channels').append(this.div);
}

ChannelDiv.prototype.hookUpChannel = function  (){
	var tickElements = this.div.children('.tick');
		for (var i=0; i<this.ticks; i++) {
			$(tickElements[i]).click(function(channelDiv, tick){
				return function  (){
					channelDiv.channel.setHit(tick);
					console.log('channel: '+channelDiv.channel+'tick: '+tick);
					channelDiv.toggle($(this));
					$('.channel').css('border', 'none');
					channelDiv.div.css('border', '1px dashed');
				};
			}(this,i));
		}
	}

ChannelDiv.prototype.toggle = function (element){
		var isOn = element.css('background-color') !== 'rgb(255, 0, 0)';
		if(isOn)
			element.css('background-color', 'red');
		else 
			element.css('background-color', 'transparent');
	}
