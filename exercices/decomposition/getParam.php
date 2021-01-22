<?php

function getParam(string $key): string
{
    return (empty($_GET) || empty($_GET[$key])) ? null : $_GET[$key];
}
