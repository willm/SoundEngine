describe("SoundEngine", function  (){

	var soundEngine,
		fakeAudiolet = {
			scheduler : {
				play : function (pattern, interval, whatToDo){},
				stop : function (){}
			}
		};

	beforeEach(function (){
		soundEngine = new SoundEngine(3,{audiolet : fakeAudiolet});
	})


	it("should set up the soundEngine correctly", function (){
		expect(soundEngine.isPlaying).toBe(false);
	});
});
