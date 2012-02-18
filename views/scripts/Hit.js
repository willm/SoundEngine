var Hit = function  (){
	this.isOn = false;
	this.pitch = 1;
	this.div = this.setUpDiv();
}

Hit.prototype.set = function  (){
	this.isOn = !this.isOn;
}

Hit.prototype.changePitch = function  (pitch){
	this.pitch = pitch;
}
	
Hit.prototype.setUpDiv = function  (){
	return $('<div>').attr('class', 'tick')
		.click(function(hit){
				return function  (){
					hit.set();
					if(hit.isOn)
						$(this).css('background-color', 'red');
					else 
						$(this).css('background-color', 'transparent');
				};
			}(this));
}

