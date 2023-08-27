<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

$_POST = json_decode(file_get_contents('php://input'),true);

session_start();
if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}

$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (mysqli_num_rows(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login'")) == 0) {

    mysqli_query($link, "INSERT INTO userlist (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
    $_SESSION['name'] = $login;
} else {
    http_response_code(401);
}
mysqli_close($link);
