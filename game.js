document.addEventListener('DOMContentLoaded', function() {

const king = {};

function completaking() {
    king.name = "Carlos";
    king.age = 32;
    king.milit = 24;
    king.rel = 45;
    king.mon = 45000;
    king.pop = 2000;

};

function namingKing(){
    const kingNames = ["Viden","Kayd","Iphan","Kondor","Nokon","Feron","Pommel","Pyke","Leth","Kaius",
        "Gossa","Brich","Carwel","Famir","Lashur","Alathic","Ellan","Myrril","Teth",
        "Fynn","Matep","Eleric","Evarius","Fendwyr","Cogwyn","Ikari","Shum",
        "Cynem","Odo","Heryd","Diadys","Pollo","Ito","Cassemyr","Ryn","Morwag",
        "Dumas","Knox","Vicar","Tandy","Blaive","Gretho","Phrinos","Throeto",
        "Peomi","Stifiri","Anshith","Sthuilre"];

    const randomName = kingNames[Math.floor(Math.random() * kingNames.length)];
    document.getElementById('kingname').textContent = randomName;
}

namingKing();


function increaseYear() {
    // Obter o elemento que contém o número
    var monthElement = document.getElementById("month");
    var yearElement = document.getElementById("year");

    // Converter o conteúdo para um número inteiro e incrementá-lo
    var month = parseInt(monthElement.textContent);
    var year = parseInt(yearElement.textContent);

    month += 1;

    if (month > 12){
        month = 1;
        year += 1;
    }

    monthElement.textContent = month;
    yearElement.textContent = year;
}

setInterval(increaseYear, 25000);
increaseYear();

const btnMilitary = document.getElementById('btn-military');
const btnMap = document.getElementById('btn-map');
const btnBattle = document.getElementById('btn-battle');
const contentDiv = document.getElementById('content2');

function showMilitaryContent(){
    contentDiv.innerHTML = '<h2>blablablaaaaaaaaaaaa</h2>'
}

function showMapContent(){
    contentDiv.innerHTML = '<img src="imagem_2024-08-19_213811065.jpg">'
}

function showBattleContent() {
    contentDiv.innerHTML = '<h2>Battle</h2>';

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

});