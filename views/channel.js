function Channel (numberOfTicks){
	this.hits = [];
	
	for (var i = 0; i<numberOfTicks; i++) {
		this.hits[i] = 0;
	}
	
	this.setHit = function(tick){
		this.hits[tick] = this.hits[tick] === 0 ? 1 : 0;
	}
}
