$(function(){

var images  = $('.anim-img .step');
var i = 0;
var n = 0;

  $(window).scroll(function() {
  
    if(n % 10 == 0){
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
       
          i++; 
        if(i > images.length - 1){
          i = 0;
        }       
  
        images[i].classList.add('active'); 

    }

  } 

// $('.s1__middle .anim-img').css('width', $('.s1 .container').width());





});