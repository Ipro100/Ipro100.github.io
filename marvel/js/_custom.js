$(function(){






	$.fn.elem = function(inEffect, outEffect) {
		$(this).each(function() {
			var ths = $(this);
			var inter;
      if(!(ths.hasClass('animated'))) {

			ths.css("opacity","1").addClass("lazyload").waypoint(function(dir) {
            
						if (dir === "down") {
								ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                ths.addClass('animated'); 
                if(ths.hasClass('anim2')){
              	inter =	setInterval(move, 1000, ths.find('img'));
                } 
                else if(ths.hasClass('anim1')) { 
               inter = setInterval(move, 2500, ths.find('img'));
   							 }
						} else {
								ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                clearInterval(inter);
               
						};
			}, {
				offset: "80%"
			});
		// ths.waypoint(function(dir) {
		// 			if (dir === "down") {
		// 						ths.removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                
                
		// 				} else {
		// 						ths.removeClass(outEffect).addClass(inEffect).css("opacity", "1");
               
                
		// 				};
		// 	}, {
		// 		offset: -$(window).height()
		// 	});	
	}		
		});

	};



function move(arr) {
let n = 0;
let timer = setInterval(function(){

  $(arr).removeClass('active');

  if(n > arr.length - 2){
      clearInterval(timer);
      n = 0;
      $(arr[arr.length - 1]).addClass('active');
      return;
    }  
 
  $(arr[n]).addClass('active');
  n++;
},100);



}


	 $('.hero-anim').elem('play' ,'stop');












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

$( window ).resize(function() {
 $('.slick-arrow').html('<span></span>');
});

});