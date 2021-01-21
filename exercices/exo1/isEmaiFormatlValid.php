<?php

function isEmailValid(string $email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}
