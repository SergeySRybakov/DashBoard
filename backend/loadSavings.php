<?php
$link = mysqli_connect('185.26.122.81', 'host1861629_1', 'kWRRZgnFZA', 'host1861629');
$_POST = json_decode(file_get_contents('php://input'),true);
session_start();

$name = $_SESSION['name'];
$dashes = mysqli_query($link, "SELECT dashes FROM userlist WHERE login='$name'");
if ($dashes != null) {
    $arr = json_encode(mysqli_fetch_object($dashes));
} else {
    $arr = [];
}
echo $arr;
