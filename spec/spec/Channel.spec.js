describe("Channel", function  (){

	var numberOfHits,
		channel;

	beforeEach(function  (){
		numberOfHits = 8;
		channel = new Channel(numberOfHits,"");
	})
	
	
	it("should initialize an empty bar", function  (){		
		expect(channel.hits.length).toEqual(numberOfHits);
		for(var hit in channel.hits){
			expect(channel.hits[hit]).toEqual(0);
		}
	});
	
	it("should set the audio context", function(){
		//var context = channel.context;
		var contextPrototypes = Object.prototype.toString.call(channel.context);
		expect(contextPrototypes.indexOf('AudioContext')).toNotEqual(-1);
	});
	
	it("should set hit", function  (){
		channel.setHit(0);
		expect(channel.hits[0]).toEqual(1);
	});
	
	it("should unset hit", function  (){
		channel.setHit(0);
		channel.setHit(0);
		expect(channel.hits[0]).toEqual(0);
	});
	
	/*it("should set the sample buffer", function (){
		channel.loadBuffer("sound.wav");
		
	})*/
})
