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


$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.loader_inner');
    $loader.fadeOut();
    $preloader.delay(0).fadeOut('slow');
  });


