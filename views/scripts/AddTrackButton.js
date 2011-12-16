	function AddTrackButton (channelElements, channels){
		var addtrackbutton = $('#add_track');

		addtrackbutton.button({
			icons: {primary: "ui-icon-plusthick"},
			text : false
		});
		
		addtrackbutton.click(function  (){
			var newChannel = new ChannelDiv(8);
			channelElements.push(newChannel);
			channels.push(newChannel.channel);
		});
	}
