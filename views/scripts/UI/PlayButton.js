	function PlayButton(soundEngine){
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
		if (this.soundEngine.isPlaying){
			console.log('Stop');
			this.soundEngine.stop();
		}
		else {
			this.soundEngine.playSequence();
		}
	}
