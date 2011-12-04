$(function  (){
	$('#play').click(function(){
		console.log('playing');
		playExample();
	});
		
		
	function playExample() {
	var Synth = function(audiolet, frequency) {
		AudioletGroup.call(this, audiolet, 0, 1);
		// Basic wave
		this.saw = new Saw(audiolet, frequency);

		// Gain envelope
		this.gain = new Gain(audiolet);
		this.env = new PercussiveEnvelope(audiolet, 1, 0.1, 0.1,
		    function() {
		        this.audiolet.scheduler.addRelative(0,
		            this.remove.bind(this));
		    }.bind(this)
		);

		// Main signal path
		this.saw.connect(this.gain);
		this.gain.connect(this.outputs[0]);

		// Envelope
		this.env.connect(this.gain, 0, 1);
	}
	extend(Synth, AudioletGroup);

	var SchedulerApp = function() {
		this.audiolet = new Audiolet();

		// Play one note on beat 0
		this.note(0, 'G4');
		this.note(1,'G3');
		this.note(2,'C4');
		
		this.note(4, 'G4');
		this.note(5,'G3');
		this.note(6,'C4');
		
		this.note(8, 'G4');
		this.note(8.5,'F4');
		this.note(9,'E4');
		this.note(9.5,'D4');
		this.note(10,'C4');
		this.note(10.5,'D4');
		this.note(11,'E4');
		this.note(11.5,'F4');
		
		this.note(12, 'G4');
		this.note(13,'G3');
		this.note(14,'C4');
	}

	SchedulerApp.prototype.note = function  (beat, note){
		this.audiolet.scheduler.addAbsolute(beat, function() {
		    this.playNote(Note.fromLatin(note).frequency());
		}.bind(this));
	}

	SchedulerApp.prototype.playNote = function(frequency) {
		var synth = new Synth(this.audiolet, frequency);
		synth.connect(this.audiolet.output);
	}

	var app = new SchedulerApp();

	}
})

