

$(function() {

	$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".hidden_lg_mnu").slideToggle();
  return false;
});

$('.slider').slick({
	dots: true,
  slidesToShow: 3,
  loop: true,
  slidesToScroll: 1,
  centerPadding: '60',
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
  
    
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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
      breakpoint: 460,
      settings: {
        arrows: false,
        centerPadding: '60',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        centerPadding: '60',
        slidesToShow: 1
      }
    }
  ]
});



$(".the-day").on('click', function(){
	var qws = $('.prog');
	var x = true;
 if(qws.hasClass('opened')){
 	if($(this).next().hasClass('opened')){
 		x = false;
 	}
 	qws.removeClass('opened').slideUp();
 }

if(x){
	$(this).next().addClass('opened').slideDown();
}


});

  $("a[href*='#']").mPageScroll2id();




$('.toclick').magnificPopup({
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    type : "image",
    gallery : {
      enabled : true
    },
    zoom: {
      enabled: true,
      duration: 500,
      opener: function(element) {
        return element.find('img')
      }
    }
});

$('.pop-content').magnificPopup({
  mainClass: 'mfp-with-zoom mfp-img-mobile',
      zoom: {
      enabled: true,
      duration: 300
      // opener: function(element) {
      //   return element.find('a')
      // }
    }
})

  $('.popup-youtube').magnificPopup({
    
    type: 'iframe',
    mainClass: 'mfp-zoom-in',
    removalDelay: 500,
    preloader: false,
    fixedContentPos: false
  })

if($(window).width > 920){
  $('section').animated("fadeIn");
  $('h1').animated('fadeInDown');
  $('.anim-descr').animated('fadeInUp');
  $('.anim-item li').animated('fadeInRight');
}

  $("form").submit(function() { //Change
    var th = $(this);
    var id = th.attr('id');
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
      success: function(data) {   

      console.log(th);
      var tag_id = "#for_content_form"; 
     
     
      $(tag_id).fadeToggle(1000);
        
        setTimeout(function() { 
        th.trigger("reset");
        $(tag_id).fadeToggle(2000);
        $.magnificPopup.close();
      }, 3000);     
    }
    });
    return false;
  }); 



  $('.reg-popup').magnificPopup({
     mainClass: 'mfp-with-zoom mfp-img-mobile',
    duration: 300

  })

  $(".reg").on('click', function() {
    $("#form_reg").fadeIn(500);
  });   



});



