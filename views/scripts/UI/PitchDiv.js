function PitchDiv (channel){
	this.channel = channel;
	var table = $('<table>');
	for(var i = 0; i<12; i++){
		table.append(this.noteRow(this.pitch));
		this.pitch = this.pitch + 0.1 * i+1;
		console.log("pitch=" +this.pitch);
	}
	return table;
}

PitchDiv.prototype.noteRow = function  (pitch){
	var row = $('<tr>');
	for(var i=0; i<this.channel.hits.length; i++){
		row.append(this.note(i));
	};
	return row;
}

PitchDiv.prototype.note = function  (hit){
	var that = this;
	return $('<td class="row' + hit + '">')
			.toggle(function  (){
				$('td.row' + hit).css('background-color', 'transparent');
				$(this).css('background-color', 'green');
				var rowNumber = this.parentElement.rowIndex +1;
				that.channel.hits[hit].pitch= (rowNumber * 0.1) +1;
			},
		function  (){
			$(this).css('background-color', 'transparent');
		});
}
