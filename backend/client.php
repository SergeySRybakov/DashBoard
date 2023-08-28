<?php
$dotenv = Dotenv\Dotenv::createImmutable(dirname("./"));
$dotenv->load();

$link = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

function auth($link, $login) {
  $GLOBALS['userdata'] = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login'"));
}

function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userlist (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
}

function loadSWavings($link, $login) {
  $GLOBALS['dashes'] = mysqli_query($link, "SELECT dashes FROM userlist WHERE login='$login'");
}

function save($link, $arr, $login) {
  mysqli_query($link, "UPDATE userlist SET dashes='$arr' WHERE login='$login'") or die(mysqli_error($link));
}

function counter($link, $login) {
  $count = mysqli_num_rows(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login'"));
  return $count;
}

function insert($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userlist (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
}

function returnData($link, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userlist WHERE login='$login'"));
  return $user_data;
}

function returnDashes($link, $login) {
  $dash = mysqli_query($link, "SELECT dashes FROM userlist WHERE login='$login'");
  return $dash;
}
