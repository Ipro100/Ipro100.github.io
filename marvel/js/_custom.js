$(function(){


// $('.title__img').animated('fadeInRight');
// $('.product-title').animated('fadeIn');
// $('.product__slang-img').animated('fadeInRight');
// $('.s3__item').animated('fadeIn');
// $('.product-label').animated('zoomIn');
// $('h1 span:last-child	span').animated('zoomIn');


// const width = window.screen.width;

// if(width < 1900 && width > 992) {
// const	res = (width - 1900)/2;
// $('.mask').css('background-position', res + 'px 50%');

// }

// // 231
// const titleWidth = () => {

// const offset1 =  $('.product__slang').offset().left + 231;
// const offset2 =  $('.product__slang').offset().left + 281;

// $('.offset1').css('width',offset1);
// $('.offset2').css('width',offset2);

// }

// titleWidth();

// $( window ).resize(function() {
//   titleWidth();
// });










// 	$.fn.elem = function(inEffect, outEffect) {
// 		$(this).each(function() {
// 			var ths = $(this);
//       if(!(ths.hasClass('animated'))) {

// 			ths.css("opacity","1").addClass("lazyload").waypoint(function(dir) {
            
// 						if (dir === "down") {
// 								ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
//                 ths.addClass('animated');  
//                 setTimeout(move,0,ths.find('.slide'));
    
// 						} else {
// 								ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                
               
// 						};
// 			}, {
// 				offset: "50%"
// 			});
// 		ths.waypoint(function(dir) {
// 					if (dir === "down") {
// 								ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                
                
// 						} else {
// 								ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
               
                
// 						};
// 			}, {
// 				offset: -$(window).height()
// 			});	
// 	}		
// 		});

// 	};

// function move(arr) {

// let n = 0;
// let timer = setInterval(function(){

//   $(arr).removeClass('active');

// n++;
// console.log(n)
//   if(n > arr.length - 2){
//       clearInterval(timer);
//       console.log("stop");
//       n = 0;
//       $(arr[arr.length - 1]).addClass('active');
//       return;
//     }  
 
//   $(arr[n]).addClass('active');
// },300);



// }


//  $('.images').elem('play' ,'stop');


$('.3items-slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

$('.items2-slide').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

$('.slick-arrow').html('<span></span>');

});