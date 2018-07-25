<?php

  $name = $_POST["name"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $email = $_POST["email"];

  if (isset($name, $subject, $message, $email)) {

    $mailTo = "radek511@op.pl";
    $headers = "From: ".$mail;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

  } else {
    echo "Error!";
  }

?>