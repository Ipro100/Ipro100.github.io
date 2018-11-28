$(function() {

$('.center').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
 
    {
      breakpoint: 460,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

	
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


	$("#form-button").click(function() {
		var chek = checkParams();
		if(chek){
		$.magnificPopup.close();
		
	}
	});

$('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  

});

function checkParams() {
    var name = $('#name').val();
    var phone = $('#phone').val();  
    if(name.length != 0 && phone.length != 0 ) {
        return true;
      }
       else {
       return false;
    }
    
}
