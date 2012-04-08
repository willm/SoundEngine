describe("Pattern Loader", function(){

	var patternLoader,
		fakePattern = {channels : [2,3,5]},
		fakeChannelLoader = {load : function (channel){}};

	beforeEach(function(){
		patternLoader = new PatternLoader([],{channelLoader : fakeChannelLoader});
	})
	
	it("should load each channel", function(){
		spyOn(fakeChannelLoader, "load");
		
		patternLoader.load(fakePattern);
		
		expect(fakeChannelLoader.load).toHaveBeenCalledWith(2);
		expect(fakeChannelLoader.load).toHaveBeenCalledWith(3);
		expect(fakeChannelLoader.load).toHaveBeenCalledWith(5);
		expect(fakeChannelLoader.load.callCount).toEqual(fakePattern.channels.length);
	})

	it("should add each loaded channel", function(){
		patternLoader.load(fakePattern);
		
		expect(patternLoader.channels.length).toEqual(fakePattern.channels.length);
	})
})
