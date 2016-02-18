
$(function() {

/*==========================================
NAVBAR
=====================================================*/
//Enables Navbar dropdown menu on hover, can click open on mobile
//NO SCROLLING DOWN FOR FULL NAVBAR LIST
// jQuery('ul.nav li.dropdown').hover(function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
// }, function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
// });

//NO SCROLLING DOWN FOR FULL NAVBAR LIST
// jQuery('ul.nav li.dropdown').hover(function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).show();
//   jQuery(this).addClass('open');
// }, function() {
//   jQuery(this).find('.dropdown-menu').stop(true, true).hide();
//   jQuery(this).removeClass('open');
// });


/*==========================================
 CAROUSEL SPEED
=====================================================*/
	$('#myCarousel').carousel({
		interval: 3500,
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

/* Show Diagnoses Description on Hover */
$('#treatments img').mouseover(function() {
	$(this).popover('show');
});
$('#treatments img').mouseout(function() {
	$(this).popover('hide');
});



/*==========================================
 PARALLAX SECTION - paradigm def
=====================================================*/
// $('.parallax-window').parallax({imageSrc: 'img/ShadowPerson.jpg'});
$('.parallax-window').parallax({imageSrc: 'img/swimTest.jpg'});


/*==========================================
  FOOTER
=====================================================*/

var today = new Date();
var year = today.getFullYear();

$('#footer').html('<p>Paradigm Physical Therapy &copy' + year + '</p>');


});