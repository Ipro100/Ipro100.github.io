$(function() {

$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".mobile-menu").slideToggle();
  return false;
});


$('.partner-form').magnificPopup({
	 overflowY: 'scroll',
	items: {
      src: '#iamPartner',
      type: 'inline'
  },
 
});

$('.hood').on('click' , function(){
	$.magnificPopup.close();
});

$('.mobile-list a').on('click' , function(){
	$('.toggle_mnu').toggleClass("on");
	$(".mobile-menu").slideToggle();
});

});