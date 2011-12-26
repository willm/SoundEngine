function PitchDiv (channel){
	this.channel = channel;
	var table = $('<table>');
		//.css('visibility','hidden');
	for(var i = 0; i<12; i++){
		table.append(this.noteRow());
	}
	return table;
}

PitchDiv.prototype.noteRow = function  (){
	var row = $('<tr>');
	for(var i=0; i<this.channel.hits.length; i++){
		row.append(this.note(i));
	};
	return row;
}

PitchDiv.prototype.note = function  (hit){
	var that = this;
	return $('<td>')
		.toggle(function  (){
			$(this).css('background-color', 'green');
			that.channel.hits[hit].pitch= (1 + 0.1 * hit);
		},
		function  (){
			$(this).css('background-color', 'transparent');
		});
}
