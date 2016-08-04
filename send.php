<?php
if ($_GET) {
    $name = htmlspecialchars($_GET["name"]);
    $phone = htmlspecialchars($_GET["phone"]);
    $link = htmlspecialchars($_GET["link"]);
    $json = array();

    $json['error'] = 0;
    echo json_encode($json);
}
