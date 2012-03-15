$(function(){
	var soundEngine,
		channels = [new MetronomeChannel(16)];

	new UploadWindow();
	new AddTrackButton(channels, 16);
	
	/*var pl = new PatternLoader(channels);
	pl.load({ 
		"songId" : 100 , 
		"_id" : { 
			"$oid" : "4f3da1ac454effe958000003"
		} , 
		"channels" : [
			{
				"sample" : "Kick.wav" , 
				"gain" : 1 , 
				"_id" : { "$oid" : "4f3da1ac454effe958000015"} , 
				"hits" : [ 
					{ "isOn" : true , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000025"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000024"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000023"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000022"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000021"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000020"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800001f"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800001e"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800001d"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800001c"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800001b"}} , 
					{ "isOn" : true , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800001a"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000019"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000018"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000017"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000016"}}
				]
			} , 
			{ 
				"sample" : "snar_07a.wav" , 
				"gain" : 1 , 
				"_id" : { "$oid" : "4f3da1ac454effe958000004"} , 
				"hits" : [
					{ "isOn" : true , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000014"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000013"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000012"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000011"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000010"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800000f"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800000e"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800000d"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800000c"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800000b"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe95800000a"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000009"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000008"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000007"}} , 
					{ "isOn" : false , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000006"}} , 
					{ "isOn" : true , "pitch" : 1 , "_id" : { "$oid" : "4f3da1ac454effe958000005"}}
				]
			}
		]
	});*/
	
	soundEngine = new SoundEngine(channels);
	new PlayButton(soundEngine);
	new TempoSelector(soundEngine);
	new SavePatternButton(channels);
});

String.prototype.getExtension = function(){
	return this.substring(this.lastIndexOf(".")+1).toLowerCase();
}
