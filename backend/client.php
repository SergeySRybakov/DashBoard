<?php
$dotenv = Dotenv\Dotenv::createImmutable(dirname("./"));
$dotenv->load();

$link = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
}

function save($link, $arr, $id) {
  mysqli_query($link, "UPDATE userdata SET data='$arr' WHERE user_id='$id'") or die(mysqli_error($link));
}

function counter($link, $login) {
  $count = mysqli_num_rows(mysqli_query($link, "SELECT * FROM userlist1 WHERE login='$login'"));
  return $count;
}

function returnData($link, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userlist1 WHERE login='$login'"));
  return $user_data;
}

function returnDash($link, $id) {
  $user_data = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userdata WHERE user_id='$id'"));
  return $user_data;
}
