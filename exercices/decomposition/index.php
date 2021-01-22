<?php

const EMAIL_PARAM_NAME = 'email';
const SPAM_DOMAINS = ['spamming.com', 'mailinator.com', 'oneminutemail.com'];

require_once("./getParam.php");
require_once("./isEmailSpam.php");
require_once("./isEmaiFormatlValid.php");

$email = getParam(EMAIL_PARAM_NAME);
if ($email === null) die("Email is not provided");
else if (!isEmailValid($email)) die("Email format invalid");
else if (isEmailSpam($email, SPAM_DOMAINS)) die("This email is a spam");
else echo "Email is valid";
