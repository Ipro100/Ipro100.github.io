$(function(){


$('.title__img').animated('fadeInRight');
$('.product-title').animated('fadeIn');
$('.product__slang-img').animated('fadeInRight');
$('.s3__item').animated('fadeIn');
$('.product-label').animated('zoomIn');


const width = window.screen.width;

if(width < 1900 && width > 992) {
const	res = (width - 1900)/2;
$('.mask').css('background-position', res + 'px 50%');

}

// 231
const titleWidth = () => {

const offset1 =  $('.product__slang').offset().left + 231;
const offset2 =  $('.product__slang').offset().left + 281;

$('.offset1').css('width',offset1);
$('.offset2').css('width',offset2);

}

titleWidth();

$( window ).resize(function() {
  titleWidth();
});


	$.fn.elem = function(inEffect, outEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity",".4").addClass("lazyload").waypoint(function(dir) {
						if (dir === "down") {
								ths.removeClass(outEffect).addClass(inEffect).attr('autoplay' , 'true').css("opacity", ".4");
						} else {
								ths.removeClass(inEffect).addClass(outEffect).removeAttr("autoplay").css("opacity", ".4");
						};
			}, {
				offset: "90%"
			});
		ths.waypoint(function(dir) {
					if (dir === "down") {
								ths.removeClass(inEffect).addClass(outEffect).removeAttr('autoplay').css("opacity", ".4");
						} else {
								ths.removeClass(outEffect).addClass(inEffect).attr('autoplay' , 'true').css("opacity", ".4");
						};
			}, {
				offset: -$(window).height()
			});	
			
		});
	};



$('.video video').elem('play' ,'stop');



});