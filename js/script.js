$(function() {

//Carousel Speed
	$('#myCarousel').carousel({
		interval: 3000,
		pause: false
	});

	$('#testimonialCarousel').carousel({
		interval: 10000,
		pause: false
	});


});

//Footer
$(function() {

var today = new Date();
var year = today.getFullYear();

$('#footer').html('<p>Paradigm Physical Therapy &copy' + year + '</p>');


});