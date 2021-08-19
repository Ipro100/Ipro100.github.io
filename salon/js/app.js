$(function() {

$(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".mobile-menu").slideToggle();
  return false;
});
});