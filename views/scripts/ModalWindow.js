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
    
    $('#upload_form').ajaxForm(function(data) {
    			var samples = $('.sample_list').children();
    			if(data === 'error'){
    				$('#upload_form')
    					.append($('<p>').text('there was an error uploading your file'));
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
            });
     
}
