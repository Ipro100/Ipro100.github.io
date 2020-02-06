<?php

$recepient = "send@igorpro.online";
$siteName = "Портфолио";

$name = trim($_POST["name"]);
$email = trim($_POST["e-mail"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $email \n Сообщение: $text";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>