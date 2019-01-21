$(function() {




	$('.s_slider').slick({
	dots: true,
  slidesToShow: 4,
  loop: true,
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
      breakpoint: 380,
      settings: {
        // arrows: false,
        centerPadding: '60',
        slidesToShow: 1
      }
    }
  ]
});




});
