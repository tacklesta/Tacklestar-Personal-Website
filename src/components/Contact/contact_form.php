<?php
    $name = $_POST['contactName'];
    $visitor_email = $_POST['contactEmail'];
    $message = $_POST['contactMessage'];


    $email_from = $_POST['contactEmail'];

    $email_subject = 'New contact request';

    $email_body = "User Name: $name.\n".
    "User Email: $visitor_email.\n".
    "User_Message: $message.\n";

    $to = "tarundyundi2000@gmai.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Contact.js");

 ?>