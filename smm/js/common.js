$(function() {

  $(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".headerMenu").slideToggle();
  return false;
});

 
    
      $(".headerMenu ul a").click(function(){
        if ($(window).width() <= '1200'){
      $(this).toggleClass("on");   
      $(".headerMenu").slideToggle();
     $(".toggle_mnu").removeClass("on");
     }
}); 
    



   

   $(".popup_content").magnificPopup({
   	type : "image",
   	gallery : {
   		enabled : true
   	},
   	remavalDelay: 300,
   	
   });

   //Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	
	
$("a[href*='#']").mPageScroll2id();


  $('.popup-youtube').magnificPopup({
    
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

$('.open-popup').magnificPopup({
  type: 'inline'
  });


var owl = $('.testimonials-block');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});



});

$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.loader_inner');
    $loader.fadeOut();
    $preloader.delay(0).fadeOut('slow');
  });


