$(function() {

 var images  = $('.rotate');
 var i = 0;

	$(window).scroll(function() {

        window.requestAnimationFrame(function() {
        	 isScrolling();
        	
        });


});

	function isScrolling(){
		 if ($(this).scrollTop() > 0) {
        console.log('scroll');

        images[i].classList.remove('active');
        	i++;
			 	if(i > images.length - 1){
			 		i = 0;
			 	}
			 	images[i].classList.add('active'); 

    }
	}


// 	var isScrolling = false;
 
// window.addEventListener("scroll", throttleScroll, false);
 
// function throttleScroll(e) {
//     if (isScrolling == false ) {
//         window.requestAnimationFrame(function() {
//           dealWithScrolling(e);
//           isScrolling = false;
//         });
//     }
//     isScrolling = true;
// }   
 
// function dealWithScrolling(e) {
//     console.log('scroll1'); 
// }

});
