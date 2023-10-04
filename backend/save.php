<?php
require_once './helpers/client.php';

$_POST = json_decode(file_get_contents('php://input'),true);

$arr = json_encode($_POST);
session_start();

if ($_SESSION['authorised'] == true) {
    $_SESSION['dash'] = $arr;
    save($link, $arr, $_SESSION['user_id']);
} else {
    echo 'Вы не зарегистрированы';
}
