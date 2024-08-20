<?php
require_once "credentials.php";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Buscar 10 inimigos aleatórios
$sql = "SELECT id, name, economy, territory, military_units, military_power 
        FROM enemies 
        ORDER BY RAND() 
        LIMIT 10";

$result = $conn->query($sql);

$enemies = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $enemies[] = $row;
    }
} 

echo json_encode($enemies);

$conn->close();
?>
