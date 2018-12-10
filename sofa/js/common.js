$(function() {

	// Custom JS
$('.center').slick({
	dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: '60',
  // autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
  
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 460,
      settings: {
        // arrows: false,
        centerPadding: '60',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        // arrows: false,
        centerPadding: '60',
        slidesToShow: 1
      }
    }
  ]
});

$('.carousel11').slick({
	dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '60',
  // autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
  
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 460,
      settings: {
        // arrows: false,
        centerPadding: '60',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 360,
      settings: {
        // arrows: false,
        centerPadding: '60',
        slidesToShow: 1
      }
    }
  ]
});

  $(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".mnu-list").slideToggle();
  if($(window).width() <= 430) {
  $(".slide").slideToggle();
 }

  return false;
});

	$(".popup_content").magnificPopup({
		type:"inline",
    removalDelay: 300,
		midClick: true
	});


$('.popup_content').click(function() {
    $('#contactForm').fadeToggle();
  })




  $(document).mouseup(function (e) {
    var container = $("#call_to_cell");
    	    if (!container.is(e.target)  // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });  

  $(document).mouseup(function (e) {
    var container = $("#contactForm");
    	    if (!container.is(e.target)  // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });


  	$(".btn-outline").click(function() {
		$('#contactForm').fadeToggle();
		$.magnificPopup.close();
	});

$('#callback').click(function(){
	$('#call_to_cell').fadeToggle();
})
                 
});

