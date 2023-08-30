<?php
require_once './helpers/client.php';

session_start();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0612a58 (remake backend)
$request_body = json_decode(file_get_contents('php://input'), true);

$pas = md5($request_body['password'] . 'fsd45%73n');
$login = $request_body['email'];

if (hasUserWithCredentials($db_connection, $login)) {
  $id = getUserData($db_connection, $login)['id'];
  $user_data = getDashboard($db_connection, $id);
  $dashes = $user_data['dashes'];
=======
$_POST = json_decode(file_get_contents('php://input'), true);
=======
$request_body = json_decode(file_get_contents('php://input'), true);
>>>>>>> 8dab0c8 (remake backend)

$pas = md5($request_body['password'] . 'fsd45%73n');
$login = $request_body['email'];

<<<<<<< HEAD
<<<<<<< HEAD
=======
$_POST = json_decode(file_get_contents('php://input'), true);
=======
$request_body = json_decode(file_get_contents('php://input'), true);
>>>>>>> 6e1275d (remake backend)

$pas = md5($request_body['password'] . 'fsd45%73n');
$login = $request_body['email'];

<<<<<<< HEAD
>>>>>>> 5f881b1 (add deletewidgetfromarray function)
=======
>>>>>>> 0612a58 (remake backend)
if (counter($link, $login) != 0) {
  $id = returnData($link, $login)['id'];
  $user_data = returnDash($link, $id);
  $dashes = $user_data['data'];
<<<<<<< HEAD
>>>>>>> b6ba537 (merge docker-compose)
=======
<<<<<<< HEAD
=======
>>>>>>> 6e1275d (remake backend)
=======
>>>>>>> 0612a58 (remake backend)
if (hasUserWithCredentials($db_connection, $login)) {
  $id = getUserData($db_connection, $login)['id'];
  $user_data = getDashboard($db_connection, $id);
  $dashes = $user_data['dashes'];
>>>>>>> 8dab0c8 (remake backend)
<<<<<<< HEAD
=======
>>>>>>> 5f881b1 (add deletewidgetfromarray function)
=======
>>>>>>> 0612a58 (remake backend)
  $_SESSION['authorised'] = true;
  $_SESSION['name'] = $login;
  $_SESSION['dash'] = $dashes;
  $_SESSION['user_id'] = $id;
} else {
  http_response_code(401);
  $_SESSION['authorised'] = false;
}
