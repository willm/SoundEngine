describe("SoundEngine", function  (){

	var soundEngine,
	
		fakeAudiolet = {
			scheduler : {
				play : function (pattern, interval, whatToDo){},
				stop : function (){},
				setTempo : function(tempo){}
			}
		},
		
		fakeChannels = [{ play : function (){}, stop : function (){} }, 
						{ play : function (){}, stop : function (){} } ];
		
	beforeEach(function (){
		soundEngine = new SoundEngine(fakeChannels,{audiolet : fakeAudiolet});
	});

	it("should set up the soundEngine correctly", function (){
		expect(soundEngine.isPlaying).toBe(false);
	});
	
	it("should play every channel", function (){
		spyOn(fakeChannels[0], 'play');
		spyOn(fakeChannels[1], 'play');
		
		soundEngine.playSequence();
	
		expect(fakeChannels[0].play).toHaveBeenCalled();
		expect(fakeChannels[1].play).toHaveBeenCalled();
	});
	
	it("should set isPlaying when playing", function (){
		soundEngine.playSequence();
	
		expect(soundEngine.isPlaying).toBe(true);
	});
	
	it("should should start an infinite 1 bar loop when played", function (){
		var spy = spyOn(fakeAudiolet.scheduler, 'play');
		var quaver = 0.25;
		
		soundEngine.playSequence();
		
		expect(spy.argsForCall[0][1]).toEqual(quaver);
		expect(spy.argsForCall[0][0][0].repeats).toEqual(Infinity);
	});
	
	it("should set the tempo", function (){
		spyOn(fakeAudiolet.scheduler, 'setTempo');
		
		soundEngine.setTempo(3);
	
		expect(fakeAudiolet.scheduler.setTempo).toHaveBeenCalledWith(3);
	});
	
	it("should stop all the channels", function (){
		spyOn(fakeChannels[0], 'stop');
		spyOn(fakeChannels[1], 'stop');
		
		soundEngine.stop();
	
		expect(fakeChannels[0].stop).toHaveBeenCalled();
		expect(fakeChannels[1].stop).toHaveBeenCalled();
	});
	
	it("should set is playing to false"),function (){
		soundEngine.isPlaying = true;
		
		soundEngine.stop();
		
		expect(soundEngine.isPlaying).toBe(false);
		
		
	}
});
