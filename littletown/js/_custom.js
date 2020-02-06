$(function() {


if(window.screen.width > 1200) {
$("body").niceScroll({
  cursorcolor:"#ff9100",
  scrollspeed: 800, // scrolling speed
  mousescrollstep: 5, // scrolling speed with mouse wheel (pixel)
});

var images  = $('.move-to-left .step');
var images_right  = $('.move-to-right .step');
var i = 0;
var n = 0;

  $(window).scroll(function() {
  
    if(n % 8 == 0){
    window.requestAnimationFrame(function() {
          isScrolling();                 
    });
}
  n++;
  if(n == 1000){
    n = 0;
  }
});

  function isScrolling(){

     if ($(this).scrollTop() > 0) {
      
        images[i].classList.remove('active');
        images_right[i].classList.remove('active');
    
          i++; 
        if(i > images.length - 1){
          i = 0;
        }       
  
        images[i].classList.add('active'); 
        images_right[i].classList.add('active'); 

    }

  } 

skrollr.init({
  render: function(data) {
   console.log(data.curTop);
   if(data.curTop > 1700 && data.curTop < 2000){$('.s3 .product').addClass('swing');$('.fmale').addClass('bounce');}

  }
});

$(window).scrollTop($(window).scrollTop()+1);

}

$('.labels .wrapimg').animated('fadeInLeft');
$('.section-description').animated('lightSpeedIn');
$('.dialog').animated('zoomInUp');
$('.s4ham').animated('zoomInUp');

$('.s8 .labels').animated('bounce');
$('.h1 span img').animated('flipInX');
$('.h1').animated('fadeInDown');
$('.header-composition .description').animated('fadeInUp');

if(window.screen.width < 1200) {

$('.mobile').animated('bounce');

}



});

