<?php
$link = mysqli_connect('185.26.122.81', 'host1861629_1', 'kWRRZgnFZA', 'host1861629');
$_POST = json_decode(file_get_contents('php://input'),true);
session_start();
if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("Соединение установлено успешно");
}

//$pas = $_POST['password'];
//$login = $_POST['email'];
$pas = md5($_POST['password'] . 'fsd45%73n');
$login = $_POST['email'];

if (mysqli_num_rows(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login'")) == 0) {

    mysqli_query($link, "INSERT INTO userlist (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
    $_SESSION['name'] = $login;
    $_SESSION['authorised'] = true;
} else {
    http_response_code(401);
    $_SESSION['authorised'] = false;
}
mysqli_close($link);