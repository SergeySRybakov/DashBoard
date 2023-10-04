<?php

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
=======
=======
>>>>>>> 93b1fc3 (remake backend)
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
=======
>>>>>>> 47ded23 (remake backend)
=======
>>>>>>> adf72c2 (linux docker-compose with proxy done)
=======
>>>>>>> 0612a58 (remake backend)
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
<<<<<<< HEAD
>>>>>>> c5fdc64 (create 2 tables sql)
=======
=======
=======
>>>>>>> fcac418 (linux docker-compose with proxy done)
=======
>>>>>>> 3c05afc (remake backend)
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
=======
=======
>>>>>>> 93b1fc3 (remake backend)
<<<<<<< HEAD:backend/client.php
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
=======
require_once __DIR__ . '/loadenv.php';
>>>>>>> e2d4835 (linux docker-compose with proxy done)

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
<<<<<<< HEAD

function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userpwlg (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
  $id = mysqli_insert_id($link);
  mysqli_query($link, "INSERT INTO userdata (user_id) VALUES ('$id')") or die(mysqli_error($link));
<<<<<<< HEAD
>>>>>>> ab38985 (merge docker-compose)
<<<<<<< HEAD
>>>>>>> a8936cf (merge docker-compose)
=======
>>>>>>> b4e7359 (linux docker-compose with proxy done):backend/helpers/client.php

<<<<<<< HEAD
function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
<<<<<<< HEAD
>>>>>>> ae06b0a (linux docker-compose with proxy done)
=======
=======
function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userpwlg (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
  $id = mysqli_insert_id($link);
  mysqli_query($link, "INSERT INTO userdata (user_id) VALUES ('$id')") or die(mysqli_error($link));
>>>>>>> 4229b31 (create 2 tables sql)
>>>>>>> 386e9d0 (create 2 tables sql)
=======
=======
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

<<<<<<< HEAD
function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
>>>>>>> 8dab0c8 (remake backend)
<<<<<<< HEAD
>>>>>>> 47ded23 (remake backend)
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
>>>>>>> 2684ffa (merge docker-compose)
=======
=======
=======
>>>>>>> b4e7359 (linux docker-compose with proxy done):backend/helpers/client.php

<<<<<<< HEAD
function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
<<<<<<< HEAD
>>>>>>> e2d4835 (linux docker-compose with proxy done)
<<<<<<< HEAD
>>>>>>> fcac418 (linux docker-compose with proxy done)
<<<<<<< HEAD
>>>>>>> adf72c2 (linux docker-compose with proxy done)
=======
=======
=======
=======
function registr($link, $login, $pas) {
  mysqli_query($link, "INSERT INTO userpwlg (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($link));
  $id = mysqli_insert_id($link);
  mysqli_query($link, "INSERT INTO userdata (user_id) VALUES ('$id')") or die(mysqli_error($link));
>>>>>>> 4229b31 (create 2 tables sql)
<<<<<<< HEAD
>>>>>>> c5fdc64 (create 2 tables sql)
<<<<<<< HEAD
>>>>>>> f1c7a1d (create 2 tables sql)
<<<<<<< HEAD
>>>>>>> 22821e6 (create 2 tables sql)
=======
=======
=======
=======
$db_connection = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));

<<<<<<< HEAD
function registr($db_connection, $login, $pas) {
  mysqli_query($db_connection, "INSERT INTO userlist1 (login, password) VALUES ('$login', '$pas')") or die(mysqli_error($db_connection));
>>>>>>> 8dab0c8 (remake backend)
<<<<<<< HEAD
>>>>>>> 93b1fc3 (remake backend)
<<<<<<< HEAD
>>>>>>> 3c05afc (remake backend)
<<<<<<< HEAD
>>>>>>> 0612a58 (remake backend)
=======
=======
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
>>>>>>> c57ed65 (merge docker-compose)
>>>>>>> 450ad1d (merge docker-compose)
}

function save($db_connection, $arr, $id) {
  mysqli_query($db_connection, "UPDATE userdata SET data='$arr' WHERE user_id='$id'") or die(mysqli_error($db_connection));
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8dab0c8 (remake backend)
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
=======
>>>>>>> 386e9d0 (create 2 tables sql)
=======
=======
>>>>>>> 8dab0c8 (remake backend)
>>>>>>> 47ded23 (remake backend)
=======
=======
>>>>>>> 0612a58 (remake backend)
=======
>>>>>>> 8dab0c8 (remake backend)
=======
>>>>>>> f1c7a1d (create 2 tables sql)
<<<<<<< HEAD
>>>>>>> 22821e6 (create 2 tables sql)
=======
=======
=======
>>>>>>> 8dab0c8 (remake backend)
>>>>>>> 3c05afc (remake backend)
>>>>>>> 0612a58 (remake backend)
function hasUserWithCredentials($db_connection, $login) {
  $count = mysqli_num_rows(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
  if ($count == 0) {
    return false;
  } else {
    return true;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
=======
>>>>>>> 47ded23 (remake backend)
}

function getUserData($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 386e9d0 (create 2 tables sql)
=======
function counter($link, $login) {
  $count = mysqli_num_rows(mysqli_query($link, "SELECT * FROM userpwlg WHERE login='$login'"));
  return $count;
}

function returnData($link, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($link, "SELECT * FROM userpwlg WHERE login='$login'"));
>>>>>>> 4229b31 (create 2 tables sql)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 47ded23 (remake backend)
=======
>>>>>>> 22821e6 (create 2 tables sql)
=======
=======
>>>>>>> 3c05afc (remake backend)
>>>>>>> 0612a58 (remake backend)
=======
}

function getUserData($db_connection, $login) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userlist1 WHERE login='$login'"));
>>>>>>> 8dab0c8 (remake backend)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae06b0a (linux docker-compose with proxy done)
=======
>>>>>>> 386e9d0 (create 2 tables sql)
=======
>>>>>>> 47ded23 (remake backend)
=======
=======
>>>>>>> f1c7a1d (create 2 tables sql)
>>>>>>> 22821e6 (create 2 tables sql)
=======
=======
>>>>>>> f1c7a1d (create 2 tables sql)
=======
>>>>>>> 3c05afc (remake backend)
>>>>>>> 0612a58 (remake backend)
  return $user_data;
}

function getDashboard($db_connection, $id) {
  $user_data = mysqli_fetch_assoc(mysqli_query($db_connection, "SELECT * FROM userdata WHERE user_id='$id'"));
  return $user_data;
}
