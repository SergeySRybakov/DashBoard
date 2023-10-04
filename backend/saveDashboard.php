<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$request_body = json_decode(file_get_contents('php://input'),true);

$arr = json_encode($request_body);
session_start();

if ($_SESSION['authorised'] == true) {
  $_SESSION['dash'] = $arr;
  save($db_connection, $arr, $_SESSION['user_id']);
} else {
  http_response_code(401);
}
