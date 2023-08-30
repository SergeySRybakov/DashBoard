<?php

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
=======
=======
>>>>>>> 93b1fc3 (remake backend)
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
<<<<<<< HEAD:backend/client.php
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
=======
require_once __DIR__ . '/loadenv.php';
<<<<<<< HEAD
>>>>>>> e2d4835 (linux docker-compose with proxy done)
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)

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
<<<<<<< HEAD
<<<<<<< HEAD

function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userpwlg (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
  $id = mysqli_insert_id($link);
  mysqli_query($link, "INSERT INTO userdata (user_id) VALUES ('$id')") or die(mysqli_error($link));
=======
>>>>>>> b4e7359 (linux docker-compose with proxy done):backend/helpers/client.php

<<<<<<< HEAD
function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
<<<<<<< HEAD
>>>>>>> e2d4835 (linux docker-compose with proxy done)
=======
=======
function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userpwlg (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
  $id = mysqli_insert_id($link);
  mysqli_query($link, "INSERT INTO userdata (user_id) VALUES ('$id')") or die(mysqli_error($link));
>>>>>>> 4229b31 (create 2 tables sql)
<<<<<<< HEAD
>>>>>>> c5fdc64 (create 2 tables sql)
=======
=======
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

<<<<<<< HEAD
function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
>>>>>>> 8dab0c8 (remake backend)
<<<<<<< HEAD
>>>>>>> 93b1fc3 (remake backend)
=======
=======
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
>>>>>>> ab38985 (merge docker-compose)
>>>>>>> a8936cf (merge docker-compose)
=======
>>>>>>> b4e7359 (linux docker-compose with proxy done):backend/helpers/client.php

function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
>>>>>>> ae06b0a (linux docker-compose with proxy done)
}

function save($db_connection, $arr, $id) {
  mysqli_query($db_connection, "UPDATE userdata SET data='$arr' WHERE user_id='$id'") or die(mysqli_error($db_connection));
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8dab0c8 (remake backend)
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
function hasUserWithCredentials($db_connection, $login) {
  $count = mysqli_num_rows(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
  if ($count == 0) {
    return false;
  } else {
    return true;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
}

function getUserData($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
<<<<<<< HEAD
=======
function counter($link, $login) {
  $count = mysqli_num_rows(mysqli_query($link, "SELECT * FROM userpwlg WHERE login='$login'"));
  return $count;
}

function returnData($link, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userpwlg WHERE login='$login'"));
>>>>>>> 4229b31 (create 2 tables sql)
=======
}

function getUserData($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
>>>>>>> 8dab0c8 (remake backend)
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
  return $user_data;
}

function getDashboard($db_connection, $id) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userdata WHERE user_id='$id'"));
  return $user_data;
}
