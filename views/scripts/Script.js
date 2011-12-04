$(function(){
	var soundEngine,
		tickElements,
		channelElements = [
			new ChannelDiv(8,"samples/perc2.wav", new Channel(8)),
			new ChannelDiv(8,"samples/perc2.wav", new SynthChannel(8,160))
			],
		channels = [],
		tempo = $('#tempo').text();
		
	new ModalWindow();
	
	setUpAddTrackButton ();
	
	setUpPlayButton ();
	
	hookUpChannels();

//---------------------PLAY BUTTON

	function setUpPlayButton (){
		var playbutton = $('#play_pause');
		
		playbutton.button({
			icons: {primary: "ui-icon-play"},
			text : false
		});

		playbutton.click(function (){
			var isPlayButton = $(this).children('.ui-icon-play').length;
			startStop();
			if(isPlayButton)
				$(this).button({icons:{primary:'ui-icon-stop'}});
			else
				$(this).button({icons:{primary:'ui-icon-play'}});
		});
		
		$(window).keypress(function  (e){
			var spaceBar = (e.keyCode === 0 || e.keyCode === 32);
			if (spaceBar){
				$('#play_pause').trigger('click');
				e.stopPropagation();
			}
		});
	}	
	
	function startStop (){
		console.log(soundEngine);
		if (soundEngine.isPlaying){
			console.log('Stop');
			soundEngine.isPlaying = false;
			clearInterval(soundEngine.playing);
		}
		else {
			soundEngine.isPlaying = true;
			soundEngine.setStartTime();
			soundEngine.playSequence(channels);
		}
	}
	
//---------------------ADD TRACK BUTTON

	function setUpAddTrackButton (){
		var addtrackbutton = $('#add_track');

		addtrackbutton.button({
			icons: {primary: "ui-icon-plusthick"},
			text : false
		});
		
		addtrackbutton.click(function  (){
			//var samplePath = prompt("Please enter the sample you would like to use for this channel")
			var newChannel = new ChannelDiv(8, "samples/kick.wav",new Channel(8));
			newChannel.hookUpChannel();
			channelElements.push(newChannel);
			channels.push(newChannel.channel);
		});
	}

	
	function hookUpChannels (){
		for (var i=0; i<channelElements.length; i++ ) {
			channelElements[i].hookUpChannel();
			channels.push(channelElements[i].channel);
			console.log(channels[i]);
		}
		soundEngine = new SoundEngine(tempo, channels);
	}
	

});

Object.prototype.getName = function() { 
   var funcNameRegex = /function (.{1,})\(/;
   var results = (funcNameRegex).exec((this).constructor.toString());
   return (results && results.length > 1) ? results[1] : "";
};
