$(function() {

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  lazyLoad: 'ondemand',
  adaptiveHeight: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.slick-next').html('<img src="img/right.png" alt=">">');
$('.slick-prev').html('<img src="img/left.png" alt="<">');

});
