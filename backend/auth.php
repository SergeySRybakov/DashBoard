<?php
require_once './helpers/client.php';
session_start();

$request_body = json_decode(file_get_contents('php://input'), true);

$pas = md5($request_body['password'] . 'fsd45%73n');
$login = $request_body['email'];

if (hasUserWithCredentials($db_connection, $login)) {
  $id = getUserData($db_connection, $login)['id'];
  $user_data = getDashboard($db_connection, $login);
  $dashes = $user_data['data'];
  $_SESSION['authorised'] = true;
  $_SESSION['name'] = $login;
  $_SESSION['dash'] = $dashes;
  $_SESSION['user_id'] = $id;
} else {
  http_response_code(401);
  $_SESSION['authorised'] = false;
}
