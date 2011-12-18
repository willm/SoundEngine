	function AddTrackButton (channelElements, channels, numberOfHits){
		var addtrackbutton = $('#add_track');

		addtrackbutton.button({
			icons: {primary: "ui-icon-plusthick"},
			text : false
		});
		
		addtrackbutton.click(function  (){
			var newChannel = new ChannelDiv(numberOfHits);
			channelElements.push(newChannel);
			channels.push(newChannel.channel);
		});
	}
