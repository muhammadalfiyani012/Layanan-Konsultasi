// JavaScript Document
$(document).ready(function() {

	if($("#owl-carousel").length){
		
		var owl = $("#owl-carousel");
		
		owl.owlCarousel({
		  items : 5, //10 items above 1000px browser width		  		  
		  itemsDesktop : [1000,5], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,4], // betweem 900px and 601px
		  itemsTablet: [650,3], //2 items between 600 and 0
		  itemsMobile : [480,2], // itemsMobile disabled - inherit from itemsTablet option	
		  autoPlay: true,
		});
		
		// Custom Navigation Events
		$(".next").on('click',function(){
			owl.trigger('owl.next');
		})
		$(".prev").on('click',function(){
			owl.trigger('owl.prev');
		});
	}
});

