function ModalWindow() {
	var uploadbutton = $('button[name=modal]');

    uploadbutton.button({
			icons: {primary: "ui-icon-arrowthick-1-n"},
			text : false
		});
 
 
    //select all the a tag with name equal to modal
    uploadbutton.click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');
     
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
     
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':maskHeight});
         
        //transition effect     
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.8);  
     
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
               
        //Set the popup window to center
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
     
        //transition effect
        $(id).fadeIn(2000); 
     
    });
     
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
        $('#upload_form').find('p').remove();
    });     
     
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });
    
    $('#upload_form').ajaxForm(
		{
			success:function(data,statusText,form) {
					var samples = $('.sample_list').children();
					if(data === 'error'){
						if(!form.children('#upload_error').length)
							form.append($('<p>').attr('id','upload_error').text('there was an error uploading your file'));
					}
		            else{
			            
		            	for(var i=0; i<samples.length; i++){
				        	$(samples[i]).remove();
				        	$('.window .close').trigger('click');
				        }
				        $.get('/samples',function  (result){
								for(var i =0; i<result.length; i++){
									console.log(result);
									$('.sample_list').append($('<option>').text(result[i]));
								}
							});
		            }
		        },
			beforeSubmit:function  (formData, form){
				console.log(this);
				if(formData[0].value.getExtension() !== "wav")
					if(!form.children('#file_type_error').length)
						form.append($('<p>').attr('id','file_type_error').text('only wav files are currently supported'));
					return false;
				return true;
			}
		});
	$('#upload_form').submit(function  (evt){
		return false;
		evt.preventDefault();
		if($($('#upload_form').children('input')[0]).val().getExtension() !== "wav"){
			return false;
			}
		return true;
	})
     
}

String.prototype.getExtension = function(){
	return this.substring(this.lastIndexOf(".")+1).toLowerCase();
}
