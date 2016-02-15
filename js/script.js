
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
    // $('#map').click(function () {
    //     $('#map iframe').css("pointer-events", "auto");
    // });
    
    // $( "#map").mouseleave(function() {
    //   $('#map iframe').css("pointer-events", "none"); 
    // });

    // Added Second Map
        $('#map, #second-map').click(function () {
        $('#map iframe, #second-map iframe').css("pointer-events", "auto");
    });
    
    $( "#map, #second-map" ).mouseleave(function() {
      $('#map iframe, #second-map iframe').css("pointer-events", "none"); 
    });

/*==========================================
 TREATMENT
=====================================================*/
/* hide treatment until hover*/
// $('p.treatment').hide();
// $('.treated').hover(function(e) {
// 	e.preventDefault();
// 	$(this).siblings('.treatment').fadeIn(500);
// 	$(this).siblings('.treatment').fadeOut(1000);
	// $(this).next().fadeIn(500);
	// $(this).next().fadeOut(1000);
// });

//This Works
// $('.treatment-type').hide();
// $('.img-circle').mouseover(function() {
// 	$(this).siblings('.treatment-type').show().addClass('');
// });
// $('.img-circle').mouseout(function() {
// 	$(this).siblings('.treatment-type').hide();
// });

//USING POPOVER
// this works speicifc to foot
// $('#foot').mouseover(function() {
// 	$('#foot').popover('show');
// });
// $('#foot').mouseout(function() {
// 	$('#foot').popover('hide');
// });

$('#treatments img').mouseover(function() {
	$(this).popover('show');
});
$('#treatments img').mouseout(function() {
	$(this).popover('hide');
});

/*==========================================
 PARALLAX SECTION - paradigm def
=====================================================*/
$('.parallax-window').parallax({imageSrc: 'img/ShadowPerson.jpg'});



/*==========================================
  FOOTER
=====================================================*/

var today = new Date();
var year = today.getFullYear();

$('#footer').html('<p>Paradigm Physical Therapy &copy' + year + '</p>');


});