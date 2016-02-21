
$(function() {

/*==========================================
NAVBAR
=====================================================*/
//if link hovered, show dropdown menu
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
});

//make dropdown parent link clickable but prevents
  //dropdown menu from appearing
// $('.dropdown-toggle').click(function() {
//   var location = $(this).attr('href');
//   window.location.href = location;
//   return false;
// });

//collapse navbar when link is clicked
//not always working
// $('.navbar-nav li a').click(function(event) {
//     $('.dropdown .navbar-collapse').collapse('hide');
//   });

//when link is clicked, close navbar 
// THIS WORKING SO FAR!
$('.dropdown').on('hide.bs.dropdown', function(e) {
  $('.navbar-collapse').collapse('hide');
});


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
    // Both Maps
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
// $('#treatments img').mouseover(function() {
// 	$(this).popover('show');
// });
// $('#treatments img').mouseout(function() {
// 	$(this).popover('hide');
// });

function hoverDiagnoses() {
  $('#treatments img').mouseover(function(e) {
    e.preventDefault();
   $(this).popover('show');
  });
  $('#treatments img').mouseout(function(e) {
    e.preventDefault();
   $(this).popover('hide');
  });
}
hoverDiagnoses();

// function clickDiagnoses() {
//   $('#treatments img').click(function(e){
//     e.preventDefault();
//     $(this).popover('toggle');
//   }); 
// }
// clickDiagnoses();



/*==========================================
 PARALLAX SECTION - paradigm def
=====================================================*/
// $('.parallax-window').parallax({imageSrc: 'img/ShadowPerson.jpg'});
// $('.parallax-window').parallax({imageSrc: 'img/swimTest.jpg'});
$('.parallax-window').parallax({
    imageSrc: 'img/swimTest.jpg',
    position: 'center top'
});

/*==========================================
 SCROLL REVEL
 =====================================================*/
 // disable on mobile
    // var config = { mobile: false }

    // window.scrollReveal = new scrollReveal();

/*==========================================
  FOOTER
=====================================================*/

var today = new Date();
var year = today.getFullYear();

$('#footer').html('<p>Paradigm Physical Therapy &copy' + year + '</p>');


});