function Channel (numberOfTicks, sample, number){
	this.hits = [];
	this.sample = sample;
	this.number = number;
	this.buffer;
	
	var bufferLoader = new BufferLoader();
	
	
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = 0;
	}
}

Channel.prototype.setHit = function(tick){
	this.hits[tick] = this.hits[tick] === 0 ? 1 : 0;
}

Channel.prototype.loadBuffer = function(url, index) {
  var context = AudioContext.getInstance();
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var channel = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    channel.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        channel.buffer = buffer;
        if (++channel.loadCount == channel.urlList.length)
          channel.onload(channel.buffer);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}







var AudioContext = (function(){
    function AudioContext() {
        //do stuff
    }
    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new webkitAudioContext();
                // Hide the constructor so the returned objected can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();
