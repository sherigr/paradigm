$(function() {


  /*==========================================
  NAVBAR
  =====================================================*/
  // if link hovered, show dropdown menu
  // only hover greater than 1024 screen size
  var screenWidth = $(window).width();
    if(screenWidth > 1024) {
      $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
       });   
    }

  //if not in collapsed state, make the parent link clickable and go directly to page
  var width = $(window).width();
  if(width > 1024) {
    $('.dropdown-toggle').click(function() {
      var location = $(this).attr('href');
      window.location.href = location;
      return false;
    });
  }

  //when link is clicked on mobile, close navbar 
  $('.dropdown').on('hide.bs.dropdown', function(e) {
    $('.navbar-collapse').collapse('hide');
  });


  /*==========================================
   CAROUSEL SPEED
  =====================================================*/
	$('#mainCarousel').carousel({
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
   DIAGNOSES TREATED
  =====================================================*/

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

  // no opacity transition on clicking image
  $('#treatments img').click(function(e) {
    e.preventDefault();
    $(this).addClass('no-hover');
  });

  // toggle diagnoses on click
  function clickDiagnoses() {
    $('[data-toggle="popover"]').popover();
  }
  clickDiagnoses();


  /*==========================================
   PARALLAX SECTION - paradigm def
  =====================================================*/
  $('.parallax-window').parallax({
      imageSrc: 'img/swimTest.jpg',
      position: 'center top'
  });


  /*==========================================
   SCROLL REVEL
   =====================================================*/

  window.sr = ScrollReveal();

  var scrollReveal = {
    delay: 500,
    easing: 'ease-in-out'
  };

  sr.reveal('.srContact, .srhomeContact, .srModalities, .srLSVT', scrollReveal);
  sr.reveal('.srDiagnoses', {delay: 600, easing: 'ease-in-out', viewFactor: 0.3 });


   // if wanting to disable on mobile
      // var config = { mobile: false }

      // window.scrollReveal = new scrollReveal();

  /*==========================================
    FOOTER
  =====================================================*/

  var today = new Date();
  var year = today.getFullYear();

   $('#footer').html('<p>Paradigm Physical Therapy &copy' + year + '</p>');


});