describe("SoundEngine", function  (){

	var soundEngine,
	
		fakeAudiolet = {
			scheduler : {
				play : function (pattern, interval, whatToDo){},
				stop : function (){}
			}
		},
		
		fakeChannels = [{ play : function (){} }, { play : function (){} } ];
		
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
	
	it("should set isPlaying", function (){
		soundEngine.playSequence();
	
		expect(soundEngine.isPlaying).toBe(true);
	});
	
});
