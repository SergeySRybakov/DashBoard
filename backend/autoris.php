<?php
require_once './helpers/client.php';

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (counter($link, $login) != 0) {
  $id = returnData($link, $login)['id'];
  $user_data = returnDash($link, $id);
  $dashes = $user_data['dashes'];
  $_SESSION['authorised'] = true;
  $_SESSION['name'] = $login;
  $_SESSION['dash'] = $dashes;
  $_SESSION['user_id'] = $id;
} else {
  http_response_code(401);
  $_SESSION['authorised'] = false;
}
