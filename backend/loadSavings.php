<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$_POST = json_decode(file_get_contents('php://input'),true);
session_start();

$login = $_SESSION['name'];
$dashes = mysqli_query($link, "SELECT dashes FROM userlist WHERE login='$login'");
if ($dashes != null) {
    $arr = json_encode(mysqli_fetch_object($dashes));
} else {
    $arr = [];
}
echo $arr;
?>
