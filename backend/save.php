<?php
require_once './helpers/client.php';

$_POST = json_decode(file_get_contents('php://input'),true);

$arr = json_encode($_POST);
session_start();

if ($_SESSION['authorised'] == true) {
    $login = $_SESSION['name'];
    $_SESSION['dash'] = $arr;
    $id = $_SESSION['user_id'];
    save($link, $arr, $id);
} else {
    echo 'Вы не зарегистрированы';
}
