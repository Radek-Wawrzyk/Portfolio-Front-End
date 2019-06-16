<?php

  $entityBody = file_get_contents('php://input');
  $post = json_decode($entityBody, true);

  $name = $post["name"];
  $subject = $post["subject"];
  $message = $post["message"];
  $email = $post["email"];

  $mailTo = "info@radek-wawrzyk.pl";
  $headers = "From: ".$email;
  $txt = "You have received an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);

?>