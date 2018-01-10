<?php

$recepient = "kvitomaniya@gmail.com";
$sitename = "Nmame Site";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Імя: $name \nТелефон: $phone";

$pagetitle = "Нова заявка з сайту \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");