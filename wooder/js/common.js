$(function() {

	$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".hidden_lg_mnu").slideToggle();
  return false;
});

});
