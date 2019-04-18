$(function() {

  $(".toggle_mnu").click(function() {
  $(this).toggleClass("on");
  $(".header-top_line").slideToggle();
  return false;
});


    //  $('form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    // if (document.form.name.value == '' || document.form.phone.value == '' ) {
    // var valid = false;
    //   return valid;
    // } 

$('#call-back').on('click',function(){
	$('#call_to_cell').fadeToggle();
});



    $(document).mouseup(function (e) {
    var container = $("#call_to_cell");
    	    if (!container.is(e.target)  // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });  

});
