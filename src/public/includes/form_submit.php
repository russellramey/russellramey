<?php
//If the form is submitted
if($_POST['name'] != '' && $_POST['email'] != '') {

	// include your PHPMailerAutoload.php
	require 'phpmailer/PHPMailerAutoload.php';

	// Create Error handling for required fields.
	// Check text input is not empty
	if(trim($_POST['name']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['name']);
	}

	//Check email valid email format
	if(trim($_POST['email']) == '')  {
		$hasError = true;
	/*} else if (!preg_match("^[A-Z0-9._%\'-]+@[A-Z0-9._%-]+\.[A-Z]{2,6}$", trim($_POST['email']))) {
		$hasError = true; */
	} else {
		$email = trim($_POST['email']);
	}

	// Check text input is not empty
	if(trim($_POST['comments']) == '') {
		$hasError = true;
	} else {
		$comments = trim($_POST['comments']);
	}

	// Check text input is not empty
	if(trim($_POST['subject']) != '') {
		$hasError = true;
	}


	//If there is no error, process the email
	if(!isset($hasError)) {

		// Initialize PHPMailer
		$notify = new PHPMailer;
		// Set connection to use SMTP
		$notify->isSMTP();
		$notify->Host = 'smtp.gmail.com';
		$notify->SMTPAuth = true;
		$notify->Username = 'rrsmptrelay@gmail.com';
		$notify->Password = 'Sk@ter10ne!';
		$notify->SMTPSecure = 'tls';
		$notify->Port = 587;
		// Set from email address & name
		$notify->From = $email;
		$notify->FromName = $name;
		// Set to(recipient) address & name
		$notify->addAddress('russelljramey@gmail.com', 'Russell Ramey');
		// Set reply address
		$notify->addReplyTo($email, $name);
		// Set content typ to HTML
		$notify->isHTML(true);
		// Set suject
		$notify->Subject = 'Comments from RussellRamey.me';
		// Set body of email
		$notify->Body = $comments;

		// Send email
		$notify->send();

	} // End IF
} ?>



<?php
// If an error is found
if(isset($hasError)) {  ?>
	<div class="form-result error">
		<h2>Whoopst!</h2>
		<p>Sorry, looks like there was an error.<br />Please make sure all fields are filled out with valid responses.</p>
	</div>
<?php } else { ?>
	<div class="form-result success">
		<h2>Message sent!</h2>
		<p>Thank you, I will be in touch with you soon!</p>
	</div>
<?php } ?>
