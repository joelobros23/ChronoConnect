<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "chronoconnect";

// Create connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Set charset to utf8mb4 to support emojis
$conn->set_charset("utf8mb4");

// Function to sanitize data
function sanitize($conn, $data) {
  return mysqli_real_escape_string($conn, trim($data));
}

?>