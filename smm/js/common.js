$(function() {

  $(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".headerMenu").slideToggle();
  return false;
});



  var width=0;
  if (self.screen) {
  width = screen.width
  height = screen.height
  }
  if (width<1280 )
  {
  
$(".headerMenu ul a").click(function(){
   $(this).toggleClass("on");   
  $(".headerMenu").slideToggle();
   $(".toggle_mnu").removeClass("on");
})

  } 

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

});

$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.loader_inner');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });
