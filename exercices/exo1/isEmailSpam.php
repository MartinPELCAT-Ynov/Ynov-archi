<?php


function isEmailSpam(string $email, array $spamDico)
{
    $emailParts = explode('@', $email);

    if ($emailParts === false || count($emailParts) !== 2) {
        echo "Unable to extract domain from email address";
        exit;
    }
    return in_array($emailParts[1], $spamDico);
}
