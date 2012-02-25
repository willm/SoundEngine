var PatternLoader = function  (channels){
	this.channelLoader = new ChannelLoader();
	this.channels = channels;
}

PatternLoader.prototype.load = function  (pattern){
	var i;
	for(i=0;i<pattern.channels.length; i++){
		var channel = pattern.channels[i];
		this.channels.push(this.channelLoader.load(channel));
	}
}

var ChannelLoader = function  (){
	this.hitLoader = new HitLoader();
}

ChannelLoader.prototype.load = function  (channel){
	//should find a way of using add track click event?
	var audioletChannel = new AudioletChannel(channel.hits.length),
		i;
	for(i=0; i<channel.hits.length; i++){
		if(channel.hits[i].isOn){
			audioletChannel.hits[i].div.click();
		}
	}
	return audioletChannel;
}

var HitLoader = function  (){
	
}
/*
$(function  (){
	var pl = new PatternLoader();
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
				"sample" : "Snare.wav" , 
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
	});
});*/
