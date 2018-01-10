<?php

$recipient = "kvitomaniya@gmail.com";
$sitename = 'Nmame Site';

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Імя: $name \nТелефон: $phone";

$pagetitle = 'Нова заявка з сайту \"$sitename\"';
mail($recipient, $pagetitle, $message, "Content-type: text/plain; charset=\"UTF-8\"\n From: $recipient");