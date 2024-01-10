<?php
// test_post.php

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data sent in the POST request
    $name = $_POST["name"];
    $age = $_POST["age"];

    // Process the data (you can perform any desired server-side logic here)

    // Send a response back to the client
    echo "Hello, $name! You are $age years old.";
} else {
    // If it's not a POST request, send an error response
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Only POST requests are allowed.";
}
?>
