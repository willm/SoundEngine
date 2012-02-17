(function  (){
	var mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/SoundEngine');
	var Schema = mongoose.Schema;

	var Hit = new Schema({
	  isOn : Boolean,
	  pitch : Number
	});

	var Channel = new Schema({
	  sample : String,
	  gain : Number,
	  hits : [Hit]
	});

	var Pattern = new Schema({
	  channels : [Channel],
	  songId : Number
	})


	var PatternModel = mongoose.model('PatternModel', Pattern);

})();

/*
EXAMPLE SONG
var p = new PatternModel({
		songId : 100,
		channels : [
			{
				sample : 'Kick.wav',
				gain : 1,
				hits : [
					{ isOn : true, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},
					{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},
					{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},
					{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1}
				]
			},
			{
				sample : 'Snare.wav',
				gain : 1,
				hits : [
					{ isOn : true, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},
					{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},
					{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},
					{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1},{ isOn : false, pitch : 1}
				]
			}
		]
	});
*/
