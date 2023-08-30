<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$request_body = json_decode(file_get_contents('php://input'),true);

$arr = json_encode($request_body);
session_start();

if ($_SESSION['authorised'] == true) {
  $login = $_SESSION['name'];
  $_SESSION['dash'] = $arr;
  $id = $_SESSION['user_id'];
  save($db_connection, $arr, $id);
} else {
  http_response_code(401);
}
