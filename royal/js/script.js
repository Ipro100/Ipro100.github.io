$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		var id = th.attr('id');
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
			success: function(data) {   

      console.log(th);
      var tag_id = (id === 'callme') ? "#for_callme" : "#for_content_form"; 
     
     
      $(tag_id).slideToggle(1000);
      	
      	setTimeout(function() {	
				th.trigger("reset");
				$(tag_id).slideToggle(1000);
			}, 2000);   

    }
		});
		return false;
	});

});