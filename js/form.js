$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			// $(formMessages).removeClass('error');  /* Add class to css */
			// $(formMessages).addClass('success');   /* Add class to css */

			//hide form after submitted
			$('#appointment-request').hide();

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#patient-name').val('');
			$('#patient-email').val('');
			$('#patient-phone').val('');
			$('#patient-insurance').val('');
			$('#patient-doctor').val('');
			$('#doctor-phone').val('');
			$('#patient-diagnosis').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			// $(formMessages).removeClass('success');
			// $(formMessages).addClass('error');
			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent. Please try again');
			}
		});

	});

});