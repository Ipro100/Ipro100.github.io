$(document).ready(function() {



   $(".popup_content").magnificPopup({
   	type : "image",
   	gallery : {
   		enabled : true
   	},
   	remavalDelay: 300,
   	
   });

  // $(".header_content h1").animated("fadeInDown");
  //  $(".line_caption p, .section_header").animated("fadeInUp");
   // $(".line_caption").animated("fadeInUp");
   // $(".portfolio_item").animated("zoomIn");
   $(".mnu_line").animated("zoomIn");
   
   $(".anim_zoom ").animated("zoomIn","zoomOut");
   $(".anim_rotate_left ").animated("rotateInUpRight");
   $(".anim_rotate_right ").animated("rotateInUpLeft");
  
   $(".animLeft ").animated("fadeInLeft");
   $(".animRight ").animated("fadeInRight");

   $(".animFadeIn").animated("fadeIn");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	
	$(".mnu_line ul li a").mPageScroll2id();



    $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form.name.value == '' || document.form.phone.value == '' ) {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.js-overlay-thank-you').fadeIn();
      $(this).find('input').val('');
      $('#form').trigger('reset');
    });
    return false;
  });





});


  $(".filter").click(function() {
    $(".filter").removeClass("active");
    $(this).addClass("active");
  });

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }

$('#all_inc').on('click',function(){
  $('.portfolio_item, .store-tab').hide();
  $('.all_inc').show();

});

// $('#html_css').on('click',function(){
//   $('.portfolio_item').hide();
//   $('.html_css').show();

// });

$('#store').on('click',function(){
  $('.portfolio_item').hide();
  $('.store').show().css('display', 'flex');

});

$('#all').on('click',function(){
  $('.store-tab').hide();
  $('.portfolio_item').show();

});





});

$(window).on('load', function () {
    $preloader = $('.loader'),
      $loader = $preloader.find('.loader_inner');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });