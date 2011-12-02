function ChannelRow(numberOfTicks){
	var channelDiv = $('<div>').attr('class', 'row channel');
	channelDiv.append(
		$('<p>').attr('class','sample_path').text('new-sound.wav')
	);
	
	for(var i=0; i<numberOfTicks; i++){
		channelDiv.append($('<div>').attr('class', 'tick'));
	}
	$('#channels').append(channelDiv);
}
