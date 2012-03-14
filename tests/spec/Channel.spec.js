describe("Channel", function  (){

	var numberOfHits,
		channel;

	beforeEach(function  (){
		numberOfHits = 8;
		channel = new AudioletChannel(numberOfHits,"");
	})
	
	
	it("should set up the channels hits correctly", function  (){
		var i;
		expect(channel.hits.length).toEqual(numberOfHits);
		for(i=0; i<channel.hits; i++){
			expect(hits[i].isOn).toBe(false);
			expect(hits[i].pitch).toEqual(1);
		}
	});
	
	it("should set the right hit", function(){
		channel.set()
		expect(contextPrototypes.indexOf('AudioContext')).toNotEqual(-1);
	});
	/*
	it("should set hit", function  (){
		channel.setHit(0);
		expect(channel.hits[0]).toEqual(1);
	});
	
	it("should unset hit", function  (){
		channel.setHit(0);
		channel.setHit(0);
		expect(channel.hits[0]).toEqual(0);
	});
	
	it("should set the sample buffer", function (){
		channel.loadBuffer("sound.wav");
		
	})*/
})
