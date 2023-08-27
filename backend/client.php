<?php
$dotenv = Dotenv\Dotenv::createImmutable(dirname("./"));
$dotenv->load();

$link = mysqli_connect(getenv("IP"), getenv("USER_NAME"), getenv("USER_PASSWORD"), getenv("DB_NAME"));
