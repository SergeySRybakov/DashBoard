<?php
$link = mysqli_connect('185.26.122.81', 'host1861629_1', 'kWRRZgnFZA', 'host1861629');
$_POST = json_decode(file_get_contents('php://input'),true);

$arr = json_encode($_POST);
session_start();


if ($_SESSION['authorised'] == true) {
    $name = $_SESSION['name'];
    mysqli_query($link, "UPDATE userlist SET dashes='$arr' WHERE login='$name'") or die(mysqli_error($link));
} else {
    echo 'Вы не зарегистрированы';
}