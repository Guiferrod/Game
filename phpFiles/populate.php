<?php
require_once "credentials.php";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
    die("connection failed: ". mysqli_connect_error());
}
echo "connected succesfully<br>";

mysqli_query($conn, 
"CREATE OR REPLACE TABLE Enemies( 
    id int NOT NULL AUTO_INCREMENT,
    name varchar(60),
    economy int,
    territory int,
    military_units int,
    military_power int,

    PRIMARY KEY (id)
    )"
    );

$names = array("Carlos","Guilherme","João","Lucas","Rafael","Pedro","Thiago","Gabriel","Rodrigo","André","Felipe","Mateus","Eduardo","Vinícius","Leonardo","Bruno","Ricardo","Marcelo","Renato","Jorge","Fernando","Hugo","Tiago","Lucas","Fábio","Vítor","Maurício","Alexandre","Roberto","Caio");
for ($i = 1; $i <= 30; $i++) {
    $name = $names[array_rand($names)];
    $economy = rand(1000, 1000000);
    $territory = rand(50, 500);
    $military_units = rand(100, 100000);
    $military_power = $military_units / 10.0;

    $sql = "INSERT INTO enemies (name, economy, territory, military_units, military_power) 
            VALUES ('$name', $economy, $territory, $military_units, $military_power)";

    if ($conn->query($sql) === TRUE) {
        echo "Registro $i inserido com sucesso<br>";
    } else {
        echo "Erro ao inserir o registro $i: " . $conn->error . "<br>";
    }
}

$conn->close();
?>
