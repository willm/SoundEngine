	function AddTrackButton (channels, numberOfHits){
		var addtrackbutton = $('#add_track');

		addtrackbutton.button({
			icons: {primary: "ui-icon-plusthick"},
			text : false
		});
		
		addtrackbutton.click(function  (){
			var newChannel = new AudioletChannel(numberOfHits);
			channels.push(newChannel);
		});
	}
