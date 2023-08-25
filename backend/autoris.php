<?php
require_once '../../../../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(dirname("./"));
$dotenv->load();

$link = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
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
