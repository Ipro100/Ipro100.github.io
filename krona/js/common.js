$(function() {

$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".hidden_lg_mnu").slideToggle();
  return false;
});

$(".hidden_lg_mnu ul a").click(function(){
   $(this).toggleClass("on");		
  $(".hidden_lg_mnu").slideToggle();
   $(".toggle_mnu").removeClass("on");
})

$(".open_mnu").click(function(){
	 $(this).toggleClass("on");
  $(".hidden_lg_mnu").slideToggle();
  $(".toggle_mnu").removeClass("on");
  
})

 $(".popup_content").magnificPopup({
   	type : "image",
   	gallery : {
   		enabled : true
   	},
   	remavalDelay: 300,
   	
   });


	$("a[href*='#']").mPageScroll2id();

});

$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.loader_inner');
    $loader.fadeOut();
    $preloader.delay(0).fadeOut('slow');
  });
