$(function(){
  setTimeout(function(){
		  	$('.loading').addClass('open');

		 	setTimeout(function(){ 
			  $('.loading').hide();
			},1500);

		},1000);
});