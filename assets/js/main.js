


 
   $(document).ready(function(){
	
	
	$(".first-button").click(function(){
		
		$(".second").show();
		$(".first-button").hide();
	});
	
	$(".second-button").click(function(){
		
		$(".second").hide();
		$(".first-button").show();
		
	});
	
	
	$(".dialogBox").dialog();
	$(".faq-accordian").accordion();
	
});



