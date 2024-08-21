    const king = {
        intellect: 1200,
        religion: 900,
        arcane: 1500,
        popularity: 300,
        territory: 50000,
        militaryPower: 1000,
        victories: 0,
        failures: 0,

        disease: false,
        burnt: false
    };

document.addEventListener('DOMContentLoaded', function() {

    const cells = document.querySelectorAll('table tbody tr td span');

    // Preencher as células com os valores do objeto king
    if (cells.length === 5) {
        cells[0].textContent = king.intellect;
        cells[1].textContent = king.religion;
        cells[2].textContent = king.arcane;
        cells[3].textContent = king.popularity;
        cells[4].textContent = king.territory;
    }

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
        var monthElement = document.getElementById("month");
        var yearElement = document.getElementById("year");

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

        let table = '<table border="1"><tr><th>Name</th><th>Economy</th><th>Territory</th><th>Military units</th><th>Military power</th><th>.</th></tr>';

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "../Game/phpFiles/battle.php", true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var enemies = JSON.parse(xhr.responseText);

                enemies.forEach(function(enemy) {
                    table += '<tr><td>' + enemy.name + '</td><td>' + enemy.economy + '</td><td>' + enemy.territory + '</td><td>' + enemy.military_units + '</td><td>' + enemy.military_power + '</td><td><button class="btn-toBattle">Battle!</button></td></tr>';
                });

                table += '</table>';
                contentDiv.innerHTML += table;

                const btnTobattleList = document.querySelectorAll('.btn-toBattle');

                btnTobattleList.forEach(function(btn) {
                    btn.addEventListener('click', function() {
                        const row = btn.closest('tr');
                        const cellToCompare = row.querySelector('td:nth-child(5)');

                        if (cellToCompare) {
                            let tableValue = parseInt(cellToCompare.textContent);
                            const tableTerritory = parseInt(row.querySelector('td:nth-child(3)').textContent);

                            if (king.militaryPower > tableValue) {
                                
                                king.territory += tableTerritory;
                                king.popularity = Math.round(king.popularity * 1.1);
                                king.militaryPower = Math.round(king.militaryPower * 0.8);
                                king.victories += 1;

                                document.getElementById('territory').textContent = king.territory;
                                cells[3].textContent = king.popularity;
                                cells[4].textContent = king.territory;

                            } else {

                                king.territory -= tableTerritory;
                                king.popularity = Math.round(king.popularity * 0.9);
                                king.militaryPower = Math.round(king.militaryPower * 0.3);
                                king.failures += 1;

                                document.getElementById('territory').textContent = king.territory;
                                cells[3].textContent = king.popularity;
                                cells[4].textContent = king.territory;

                                console.log(king.failures)
                            }
                            row.remove();
                        }
                    });
                });
            }
        };
        xhr.send();
    }

    showMilitaryContent();

    btnMilitary.addEventListener('click', showMilitaryContent);
    btnMap.addEventListener('click', showMapContent);
    btnBattle.addEventListener('click', showBattleContent);

});
