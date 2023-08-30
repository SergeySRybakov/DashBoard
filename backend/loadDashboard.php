<?php
require_once '../../../../../vendor/autoload.php';
require_once './client.php';

session_start();

$login = $_SESSION['name'];
$dashes = $_SESSION['dash'];
if ($dashes != null) {
    echo json_encode($dashes);
} else {
    echo [];
}
?>
