<?php

$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

$DB_HOST = getenv("DB_HOST");
$DB_USER = getenv("DB_USER");
$DB_PASS = getenv("DB_PASS");
$DB_NAME = getenv("DB_NAME");

$link = mysqli_connect(
  $DB_HOST,
  $DB_USER,
  $DB_PASS,
  $DB_NAME,
);

function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userpwlg (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
  $id = mysqli_insert_id($link);
  mysqli_query($link, "INSERT INTO userdata (user_id) VALUES ('$id')") or die(mysqli_error($link));
}

function save($db_connection, $arr, $id) {
  mysqli_query($db_connection, "UPDATE userdata SET data='$arr' WHERE user_id='$id'") or die(mysqli_error($db_connection));
}

function hasUserWithCredentials($db_connection, $login) {
  $count = mysqli_num_rows(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
  if ($count == 0) {
    return false;
  } else {
    return true;
  }
}

function getUserData($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
  return $user_data;
}

function getDashboard($db_connection, $id) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userdata WHERE user_id='$id'"));
  return $user_data;
}
