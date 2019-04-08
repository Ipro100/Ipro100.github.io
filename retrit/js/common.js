$(function() {

	$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".hidden_lg_mnu").slideToggle();
  return false;
});

$('.slider').slick({
	dots: true,
  slidesToShow: 4,
  loop: true,
  slidesToScroll: 1,
  centerPadding: '60',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
  
    
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },   
     {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 460,
      settings: {
        arrows: false,
        centerPadding: '60',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        centerPadding: '60',
        slidesToShow: 1
      }
    }
  ]
});



$(".the-day").on('click', function(){
	var qws = $('.prog');
	var x = true;
 if(qws.hasClass('opened')){
 	if($(this).next().hasClass('opened')){
 		x = false;
 	}
 	qws.removeClass('opened').slideUp();
 }

if(x){
	$(this).next().addClass('opened').slideDown();
}


});

  $(".header .header_line a[href*='#']").mPageScroll2id();

});
