'use strict';

$(function ()
{
     $(".header-menu a").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
    
    $('.play').on('click',function(){
        // alert('aaaaa');
        $('.btm-left').css('display','none');
        $('.video').fadeIn(2000);
    });
    
     $('.testimonials-block').owlCarousel({
            items: 2,
            dots:true,
          
            autoPlay:2000,
            margin: 55,
            responsive: {
                240:{
                    items: 1,
                },
                320: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                680: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1
                }
            }
        });

});