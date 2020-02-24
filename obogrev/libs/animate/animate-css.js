//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {

		$.fn.animated = function(inEffect, outEffect) {
		
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "80%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
				
				
		};
})(jQuery);