const king = {};

function completaking() {
    king.name = "Carlos";
    king.age = 32;
    king.milit = 24;
    king.rel = 45;
    king.mon = 45000;
    king.pop = 2000;

};

function increaseYear() {
    // Obter o elemento que contém o número
    var yearElement = document.getElementById("year");

    // Converter o conteúdo para um número inteiro e incrementá-lo
    var year = parseInt(yearElement.textContent);
    year += 1;

    yearElement.textContent = year;
}

increaseYear();

// Define um intervalo de 20 minutos (1200 segundos) para chamar a função
setInterval(increaseYear, 1200000); // 1200000 ms = 20 minutos

const btnMilitary = document.getElementById('btn-military');
const btnMap = document.getElementById('btn-map');
const btnBattle = document.getElementById('btn-battle');
const contentDiv = document.getElementById('content');

function showMilitaryContent(){
    contentDiv.innerHTML = '<h2>blablablaaaaaaaaaaaa</h2>'
}

function showMapContent(){
    contentDiv.innerHTML = '<img src="imagem_2024-08-19_213811065.jpg">'
}

function showBattleContent() {
    contentDiv.innerHTML = '<h2>Batalha</h2>';

    // Criar a tabela e o cabeçalho
    let table = '<table border="1"><tr><th>Name</th><th>Economy</th><th>Territory</th><th>Military units</th><th>Military power</th><th>.</th></tr>';

    // Fazer uma requisição AJAX ao script PHP
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../Game/phpFiles/battle.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var enemies = JSON.parse(xhr.responseText);

            // Preencher a tabela com os dados
            enemies.forEach(function(enemy) {
                table += '</td><td>' + enemy.name + '</td><td>' + enemy.economy + '</td><td>' + enemy.territory + '</td><td>' + enemy.military_units + '</td><td>' + enemy.military_power + '</td><td><button id="btn-toBattle!">Battle!</button></td></tr>';
            });

            // Fechar a tabela
            table += '</table>';

            // Adicionar a tabela ao contentDiv
            contentDiv.innerHTML += table;
        }
    };
    xhr.send();
}


showMilitaryContent();

btnMilitary.addEventListener('click', showMilitaryContent);
btnMap.addEventListener('click', showMapContent);
btnBattle.addEventListener('click', showBattleContent);
