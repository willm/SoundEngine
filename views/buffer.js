$(function (){
	
	var list;
	var context = new webkitAudioContext();
	var isPlaying = false;
	
	var bufferLoader = new BufferLoader(
		context,
		[
			'kick.wav',
			'snare.wav',
			'808 highhat.wav'
		],
		function (buffferList){
			list = buffferList;
		}
	);

	bufferLoader.load();
	
	$('a').click(function (){
		isPlaying = true;
		playBar(list);
	});
	
	function playSound(buffer, time) {
	  var source = context.createBufferSource();
	  source.buffer = buffer;
	  source.connect(context.destination);
	  source.noteOn(time);
	}
	
	function playBar(bufferList){
		var kick = bufferList[0];
		var snare = bufferList[1];
		var hihat = bufferList[2];
		var startTime = context.currentTime + 0.100;
		var tempo = 160; // BPM (beats per minute)
		var eighthNoteTime = (60 / tempo) / 2;
		
		for (var bar = 0; bar < 16; bar++) {
			var time = startTime + bar * 8 * eighthNoteTime;
			// Play the bass (kick) drum on beats 1, 5
			playSound(kick, time);
			playSound(kick, time + 5 * eighthNoteTime);

			// Play the snare drum on beats 3, 7
			playSound(snare, time + 2 * eighthNoteTime);
			playSound(snare, time + 6 * eighthNoteTime);
			
			for (var i = 0; i < 8; ++i) {
				playSound(hihat, time + i * eighthNoteTime);
			}
		}
	}
})
