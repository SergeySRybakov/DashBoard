<?php
require_once './helpers/client.php';

$_POST = json_decode(file_get_contents('php://input'),true);
session_start();

$login = $_SESSION['name'];
$dashes = $_SESSION['dash'];
if ($dashes != null) {
    echo json_encode($dashes);
} else {
    echo [];
}
?>
