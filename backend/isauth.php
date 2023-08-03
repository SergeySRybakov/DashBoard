<?php
$link = mysqli_connect('185.26.122.81', 'host1861629', 'sXVT0Kz0ka', 'host1861629');
$_POST = json_decode(file_get_contents('php://input'),true);
session_start();
if ($_SESSION['authorised'] == true) {
    echo true;
} else {
    echo false;
}
?>