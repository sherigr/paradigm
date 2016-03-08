<?php

// Only process POST reqeusts.
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get the form fields and remove whitespace.
      $name = strip_tags(trim($_POST["name"]));
			$name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $phone = $_POST["phone-number"];
      $insurance = trim($_POST["insurance"]);
      $doctor = trim($_POST["doctor"]);
      $drphone = trim($_POST["doctor-number"]);
      $message = trim($_POST["diagnosis"]);

      // Check valid phone number
      function valid_number($phone) {
        $reg = "/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i";
        if(preg_match($reg, $phone)) {
          return true;
        }
          return false;

      }

      // Check that data was sent to the mailer.
      // if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone)) {
      if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR !valid_number($phone, $drphone)) {
          // Set a 400 (bad request) response code and exit.
          http_response_code(400);
          echo "Please complete the required information on the form and try again.";
          exit;
      }

      //Prevent email header injection attack
      foreach( $_POST as $value ){
			  if( stripos($value,'Content-Type:') !== FALSE ){
			  	echo "There was a problem with the information entered";
				  exit;
		  	}
      }

      //if hidden field is not empty, don't submit
      if ($_POST["address"] != "") {
      	echo "Your form submission has an error";
      	exit;
      }

      // Set email where form is being sent
      // $recipient = "info@ptparadigm.com";

      // ** delete this email after testing and put back info@ptparadigm **
      $recipient = "webmaster@ptparadigm.com";

      // Set the email subject.
      $subject = "New contact form from $name";

      // Build the email content.
      $email_content = "Name: $name\n\n";
      $email_content .= "Email: $email\n\n";
      $email_content .= "Phone: $phone\n\n";
      $email_content .= "Insurance: $insurance\n\n";
      $email_content .= "Referring Doctor: $doctor\n\n";
      $email_content .= "Doctor's Phone: $drphone\n\n";
      $email_content .= "Diagnosis:\n$message\n";

      // Autoresponder email
        //This works but response email from server not ptparadigm
      $respond_subject = "Thank you for contacting Paradigm";
      $respond_message = "We will get back to you as soon as possible\n

      Regards,
      Paradigm Physical Therapy
      wwww.ptparadigm.com";

      mail($email, $respond_subject, $respond_message);
      // end of autoresponder email

      // Build the email headers.
      $email_headers = "From: $name <$email>";

      // Send the email.
      if (mail($recipient, $subject, $email_content, $email_headers)) {
          // Set a 200 (okay) response code.
          http_response_code(200);
          echo "Thank You for your appointment request.";
      } else {
          // Set a 500 (internal server error) response code.
          http_response_code(500);
          echo "Oops! Something went wrong and we couldn't send your message.";
      }

  } else {
      // Not a POST request, set a 403 (forbidden) response code.
      http_response_code(403);
      echo "There was a problem with your submission, please try again.";
  }

?>