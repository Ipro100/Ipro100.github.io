$(function() {

 var images  = $('.rotate');
 var images1  = $('.rotate1');
 var i = 0;
 var j = 0;
 var n = 0;
 var k = true;

	$(window).scroll(function() {
	
		if(n % 2 == 0){
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
        images1[j].classList.remove('active');
       
        	i++; 
        	j++;
			 	if(i > images.length - 1){
			 		i = 0;
			 	}			 	
			 	if(j > images1.length - 1){
			 		j = 0;
			 	}
			 	images[i].classList.add('active'); 
			 	images1[j].classList.add('active'); 

    }

	}	

	// var controller = new ScrollMagic.Controller()
	// var scene = new ScrollMagic.Scene({
	// 		triggerElement: '.logo',
	// 		duration: 1000
	// })
	// .setClassToggle('.s1_advantage .item', 'fade-in')
	// .addIndicators({
	// 	name: 'fade scene',
	// 	colorTrigger: 'black',
	// 	colorStart: 'red'
	// })
	// .addTo(controller);
});