describe("AudioletChannel", function  (){

	var numberOfHits,
		channel,

	fakeHit = { set : function(){} },
	
	fakeSampleManager = {
		load : function (url){},
		changeVolume : function (volume){},
		play : function (){},
		setPitch : function (){}
	},
	
	fakeAudiolet = {
		scheduler : {
			play : function (pattern, interval, whatToDo){},
			stop : function (){}
		}
	};

	beforeEach(function  (){
		numberOfHits = 8;
		channel = new AudioletChannel(numberOfHits, 
		{
			audiolet : fakeAudiolet, 
			hit : fakeHit,
			sampleManager : fakeSampleManager
		});
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
	
	it("should should set the samples pitch", function (){
		spyOn(channel.sampleManager, 'setPitch');
		
		channel.setPitch(6);
		
		expect(channel.sampleManager.setPitch).toHaveBeenCalledWith(6);
	});
	
	it("should should play the sequence", function (){
		spyOn(channel.audiolet.scheduler, 'play');
		
		channel.play();
		
		expect(channel.audiolet.scheduler.play).toHaveBeenCalled();
	});
	
	it("should should stop playing the sequence", function (){
		spyOn(channel.audiolet.scheduler, 'stop');
		
		channel.stop();
		
		expect(channel.audiolet.scheduler.stop).toHaveBeenCalled();
	});
})
