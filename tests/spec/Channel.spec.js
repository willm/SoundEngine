describe("AudioletChannel", function  (){

	var numberOfHits,
		channel;

	FakeHit = function  (){
		this.set = function(){};
	}
	
	FakeSampleManager = function (){
		this.load = function (url){};
		this.changeVolume = function (volume){};
		this.play = function (){};
		this.setPitch = function (){};
	}

	beforeEach(function  (){
		numberOfHits = 8;
		channel = new AudioletChannel(numberOfHits,"");
		for(var i=0; i<channel.hits.length; i++){
			channel.hits[i] = new FakeHit();
		};
		channel.sampleManager = new FakeSampleManager();
	})
	
	
	
	it("should set up right amount of hits", function  (){
		expect(channel.hits.length).toEqual(numberOfHits);
	});
	
	it("should set the right hit", function(){
		spyOn(channel.hits[3], 'set');
		
		channel.setHit(3);
		
		expect(channel.hits[3].set).toHaveBeenCalled();
	});
	
	it("should set the sample to the given url", function  (){
		spyOn(channel.sampleManager, 'load');
		
		channel.loadBuffer("samples/kick.wav");
		
		expect(channel.sampleManager.load).toHaveBeenCalledWith("samples/kick.wav");
	});
	
	it("should change the volume", function  (){
		spyOn(channel.sampleManager, 'changeVolume');
		
		channel.setVolume(5);
		
		expect(channel.sampleManager.changeVolume).toHaveBeenCalledWith(5);
	});
	
	it("should play the sample", function (){
		spyOn(channel.sampleManager, 'play');
		
		channel.playSound();
		
		expect(channel.sampleManager.play).toHaveBeenCalled();
	});
})
