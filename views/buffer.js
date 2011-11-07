$(function (){
	
	var list;
	var context = new webkitAudioContext();
	var isPlaying = false;
	var kicks = [1,1,1,0,1,0,1,0];
	
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
			/*playSound(kick, time);
			playSound(kick, time + 5 * eighthNoteTime);*/
			for (var i=0; i < kicks.length; i++) {
				if(kicks[i]){
					playSound(kick,(time)+i * eighthNoteTime);
				}
			}
			//if(kicks)

			// Play the snare drum on beats 3, 7
			/*playSound(snare, time + 2 * eighthNoteTime);
			playSound(snare, time + 6 * eighthNoteTime);
			
			for (var i = 0; i < 8; ++i) {
				playSound(hihat, time + i * eighthNoteTime);
			}*/
		}
	}
})
