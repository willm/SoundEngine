function SampleList (channel){
	this.channel = channel;
	var list = $('<select>').attr('class', 'sample_list');
	var that = this;
	$.get('/samples',function  (result){
			that.channel.loadBuffer('samples/'+result[0]);
			for(var i =0; i<result.length; i++){
				list.append($('<option>').text(result[i]));
			};			
		});
	list.change(function  (){
		var selectedSample = $(this).children(':selected').text();
		console.log(selectedSample);
		that.channel.loadBuffer('samples/'+selectedSample);
	});
	return list;
}
