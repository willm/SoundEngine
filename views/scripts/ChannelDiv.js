function ChannelDiv (numberOfTicks){
	this.channel;
	this.ticks = numberOfTicks;
	this.div = $('<div>').attr('class', 'row channel');
	
	this.div.append(
		$('<p>').attr('class','sample_path').text('samples/Clique-Perc2-01.wav')
	);
	
	for(var i=0; i<this.ticks; i++){
		this.div.append($('<div>').attr('class', 'tick'));
	}
	$('#channels').append(this.div);
}

ChannelDiv.prototype.hookUpChannel = function  (){


				var tickElements = this.div.children('.tick'),
					samplePath = this.div.children('.sample_path').text();
				this.channel = new Channel(this.ticks);
				this.channel.loadBuffer(samplePath);
				for (var j=0; j<this.ticks; j++) {
					$(tickElements[j]).click(function(channel, tick){
						return function  (){
							channel.setHit(tick);
							console.log('channel: '+channel+'tick: '+tick);
							toggle($(this));
						};
					}(this.channel,j));
				}
			}
			
this.toggle = function (element){
		var isOn = element.css('background-color') !== 'rgb(255, 0, 0)';
		if(isOn)
			element.css('background-color', 'red');
		else 
			element.css('background-color', 'transparent');
	}
