<?php
require_once './helpers/client.php';

session_start();

$login = $_SESSION['name'];
$dashes = $_SESSION['dash'];
if ($dashes != null) {
    echo json_encode($dashes);
} else {
    echo json_encode(getDashboard($db_connection, $login));
}
?>
