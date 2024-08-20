<?php
    include "credentials.php";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("connection failed: ". mysqli_connect_error());
}
echo "connected succesfully<br>";

if (!mysqli_query($conn, "CREATE OR REPLACE DATABASE game")){
    die('Erro cria base:'.mysqli_error($conn));
};

mysqli_close($conn);
?>