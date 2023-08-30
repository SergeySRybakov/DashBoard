<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$request_body = json_decode(file_get_contents('php://input'), true);

session_start();

$pas = md5($request_body['password'] . 'fsd45%73n');
$login = $request_body['email'];

if (!hasUserWithCredentials($db_connection, $login) == 0) {
  registr($db_connection, $login, $pas);
  $_SESSION['name'] = $login;
  $_SESSION['authorised'] = true;
} else {
  http_response_code(401);
  $_SESSION['authorised'] = false;
}
