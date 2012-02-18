var Hit = function  (){
	this.isOn = false;
	this.pitch = 1;
}

Hit.prototype.set = function  (){
	this.isOn = !this.isOn;
}

Hit.prototype.changePitch = function  (pitch){
	this.pitch = pitch;
}

