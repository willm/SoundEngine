function FakeDB (){
	this.Db = [];
}

FakeDB.prototype.save = function  (key, value){
	this.Db[key] = value;
}
