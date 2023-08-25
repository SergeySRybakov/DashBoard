<?php
require_once '../../../../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(dirname("./"));
$dotenv->load();

$link = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
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
?>
