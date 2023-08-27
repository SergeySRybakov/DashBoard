<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';
session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (mysqli_num_rows(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login' AND password='$pas'")) != 0) {
    $user_data = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login'"));
    $dashes = $user_data['dashes'];
    $_SESSION['name'] = $login;
    $_SESSION['dash'] = $dashes;
    $daha = json_encode($dashes);
    echo $dashes;
} else {
    http_response_code(401);
}
