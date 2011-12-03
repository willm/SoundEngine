function ChannelDiv (numberOfTicks, sample){
	this.channel;
	this.ticks = numberOfTicks;
	this.div = $('<div>').attr('class', 'row channel');
	this.channel = new Channel(this.ticks);
	
	this.div.append(
		$('<p>').attr('class','sample_path').text(sample), 
		this.sampleList()
	);
	
	for(var i=0; i<this.ticks; i++){
		this.div.append($('<div>').attr('class', 'tick'));
	}
	$('#channels').append(this.div);
}

ChannelDiv.prototype.hookUpChannel = function  (){
	var tickElements = this.div.children('.tick'),
			samplePath = this.div.children('.sample_path').text();
		
		this.channel.loadBuffer(samplePath);
		for (var i=0; i<this.ticks; i++) {
			$(tickElements[i]).click(function(channelDiv, tick){
				return function  (){
					channelDiv.channel.setHit(tick);
					console.log('channel: '+channelDiv.channel+'tick: '+tick);
					channelDiv.toggle($(this));
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
	
ChannelDiv.prototype.sampleList = function (){
	var list = $('<select>');
	var that = this;
	$.get('/samples',function  (result){
			for(var i =0; i<result.length; i++){
				list.append($('<option>').text(result[i]));
			}
			
		});
	list.change(function  (){
		var selectedSample = $(this).children(':selected').text();
		console.log(selectedSample);
		that.channel.loadBuffer('samples/'+selectedSample);
	})
	return list;
	
}
