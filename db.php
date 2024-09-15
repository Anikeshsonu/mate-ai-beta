<?php
// db.php
$servername = "localhost";  // Change this to your server's address
$username = "root";         // MySQL username
$password = "";             // MySQL password
$dbname = "mate_ai";        // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>