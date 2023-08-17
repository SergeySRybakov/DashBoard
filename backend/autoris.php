<?php
$link = mysqli_connect('185.26.122.81', 'host1861629_1', 'kWRRZgnFZA', 'host1861629');
$_POST = json_decode(file_get_contents('php://input'),true);

$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (mysqli_num_rows(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login' AND password='$pas'")) != 0) {
    $dashes = mysqli_query($link, "SELECT dashes FROM userlist WHERE login='$login'");
    session_start();
    $_SESSION['name'] = $login;
    $_SESSION['dash'] = $dashes;
    $_SESSION['authorised'] = true;
    $daha = json_encode($dashes);
} else {
    http_response_code(401);
    $_SESSION['authorised'] = false;
}