<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$_POST = json_decode(file_get_contents('php://input'),true);

$arr = json_encode($_POST);
session_start();

if ($_SESSION['authorised'] == true) {
    $login = $_SESSION['name'];
    $_SESSION['dash'] = $arr;
    save($link, $arr, $login);
} else {
    echo 'Вы не зарегистрированы';
}
