<?php
$dotenv = Dotenv\Dotenv::createImmutable(dirname("./"));
$dotenv->load();

$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
}

function save($db_connection, $arr, $login) {
  mysqli_query($db_connection, "UPDATE userlist SET dashes='$arr' WHERE login='$login'") or die(mysqli_error($db_connection));
}

function hasUserWithCredentials($db_connection, $login) {
  $count = mysqli_num_rows(mysqli_query($db_connection, "SELECT * FROM userlist WHERE login='$login'"));
  if ($count == 0) {
    return false;
  } else {
    return true;
  }
}

function getUserData($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist WHERE login='$login'"));
  return $user_data;
}

function getDashboard($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist WHERE login='$login'"));
  return $user_data;
}
