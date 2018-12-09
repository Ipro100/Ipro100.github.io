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


});
