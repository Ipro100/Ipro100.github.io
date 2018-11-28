$(function() {

$('.center').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  // autoplay: true,
  // autoplaySpeed: 5000,
  responsive: [
 
    {
      breakpoint: 460,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

	
	// $(".popup_content").magnificPopup({
	// 	type:"inline",
	// 	midClick: true
	// });
});
