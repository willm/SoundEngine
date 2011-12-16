	function PlayButton(soundEngine){
		console.log(soundEngine);
		this.soundEngine = soundEngine;
		var playbutton = $('#play_pause'),
			that = this;
		
		playbutton.button({
			icons: {primary: "ui-icon-play"},
			text : false
		});

		playbutton.click(function (){
			var isPlayButton = $(this).children('.ui-icon-play').length;
			that.startStop();
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
	
	PlayButton.prototype.startStop = function (){
		console.log(this.soundEngine);
		if (this.soundEngine.isPlaying){
			console.log('Stop');
			this.soundEngine.isPlaying = false;
			clearInterval(this.soundEngine.playing);
		}
		else {
			this.soundEngine.isPlaying = true;
			this.soundEngine.setStartTime();
			this.soundEngine.playSequence(channels);
		}
	}
