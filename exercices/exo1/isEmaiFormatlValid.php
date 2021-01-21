<?php

function isEmailValid(string $value)
{
    return filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
}
