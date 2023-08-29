<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$_POST = json_decode(file_get_contents('php://input'), true);

session_start();

$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (counter($link, $login) == 0) {
  registr($link, $login, $pas);
  $_SESSION['name'] = $login;
  $_SESSION['authorised'] = true;
} else {
  http_response_code(401);
  $_SESSION['authorised'] = false;
}
