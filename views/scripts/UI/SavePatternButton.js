function SavePatternButton (channels){
	this.channels = channels;
	var savePatternButton = $('#save');
	savePatternButton.click(function  (){
			$('#patterns').append($('<div class="pattern">'));
			console.log($('#isLooping'));
			this.save();
		}.bind(this));
	
	savePatternButton.button({
			icons: {primary: "ui-icon-arrowthick-1-s"},
			text : false
	});
	
	this.db = new FakeDB();
}

SavePatternButton.prototype.save =  function  (){
		for (var i=1; i<this.channels.length; i++) {
				this.db.save(i,this.channels[i].hits);
				console.log(this);
			}
}
