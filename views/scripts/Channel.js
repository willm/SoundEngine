function Channel (numberOfTicks, sample, number){
	this.hits = [];
	this.sample = sample;
	this.number = number;
	this.buffer;
	this.context = AudioContext.getInstance();
	
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = 0;
	}
}

Channel.prototype.setHit = function(tick){
	this.hits[tick] = this.hits[tick] === 0 ? 1 : 0;
}

Channel.prototype.loadBuffer = function(url) {
	var self =this,
		request = new XMLHttpRequest();
	
	request.open("GET", url, true);
	request.responseType = "arraybuffer";
	request.onload = function() {
	// Asynchronously decode the audio file data in request.response
		self.context.decodeAudioData(
			request.response,
			function(buffer) {
				if (!buffer) {
					alert('error decoding file data: ' + url);
					return;
				}
				self.buffer = buffer;
				//self.onload(self.buffer); callback here.
			}
		);
	}

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

Channel.prototype.playSound = function (time) {
	  var source = this.context.createBufferSource();
	  source.buffer = this.buffer;
	  source.connect(AudioContext.getInstance().destination);
	  source.noteOn(time);
	}
