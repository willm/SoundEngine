	function TempoSelector (soundEngine){
		var tempo = $('.tempo_value').val();
		
		$('.tempo_value').change(function  (){
			soundEngine.setTempo($(this).val());
		});
		
		$('.tempo_value').trigger('change');
	}
