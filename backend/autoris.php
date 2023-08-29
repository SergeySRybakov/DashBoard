<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';
session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (counter($link, $login) != 0) {
  $_SESSION['authorised'] = true;
    $user_data = returnData($link, $login);
    $dashes = $user_data['dashes'];
    $_SESSION['name'] = $login;
    $_SESSION['dash'] = $dashes;
} else {
    http_response_code(401);
    $_SESSION['authorised'] = false;
}
