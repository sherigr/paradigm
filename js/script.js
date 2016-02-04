
$(function() {

/*==========================================
 CAROUSEL SPEED
=====================================================*/
	$('#myCarousel').carousel({
		interval: 3000,
		pause: false
	});

	$('#testimonialCarousel').carousel({
		interval: 10000,
		pause: false
	});


/*==========================================
 GOOGLE MAP
=====================================================*/
    $('#map').click(function () {
        $('#map iframe').css("pointer-events", "auto");
    });
    
    $( "#map" ).mouseleave(function() {
      $('#map iframe').css("pointer-events", "none"); 
    });

/*==========================================
  FOOTER
=====================================================*/

var today = new Date();
var year = today.getFullYear();

$('#footer').html('<p>Paradigm Physical Therapy &copy' + year + '</p>');


});