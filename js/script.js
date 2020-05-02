/*Game module */


printMessage('Paper-Stone-Scissors is simple but yet funny game to play. Win with the MakuBot');

function playGame(playerInput) {

    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == '2') {
            return 'papier';
        } else if (argMoveId == '3') {
            return 'nożyce';
        } else {
            console.log('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let argComputerMove = getMoveName(randomNumber);
    console.log('Wylosowana liczba to: ' + randomNumber);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);

    var argStatus = 0;

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            argStatus = 2;
            console.log(argStatus)
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            argStatus = 0;
            console.log(argStatus)
            return 'No to mamy remis';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            argStatus = 1;
            console.log(argStatus)
            return 'Yupi joł wygrałem, a Ty przegrałeś.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            argStatus = 2;
            console.log(argStatus)
            return 'W.Y.G.R.A.Ł.E.Ś';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            argStatus = 0;
            console.log(argStatus)
            return 'Remis. Zagrajmy jeszcze raz!.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            argStatus = 1;
            console.log(argStatus)
            return 'O kto tutaj jest mistrzem? Wygrałem. Szach mat!';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            argStatus = 1;
            console.log(argStatus)
            return 'Ha! I am the Champion.';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            argStatus = 2;
            console.log(argStatus)
            return 'Buuu to niesprawiedliwe. Ja chce wygrać!';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            argStatus = 0;
            console.log(argStatus)
            return 'Heh kto ten program stworzył. Znowu remis?';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            argStatus = 0;
            console.log(argStatus)
            return 'Wpisz Synu poprawną wartość.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
            argStatus = 0;
            console.log(argStatus)
            return 'Coś Ci ręcę drżą. Wpisz poprawną wartość';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            console.log(argStatus)
            argStatus = 0;
            return 'No co tam? Masz do wyboru 1 , 2 lub 3';
        }

    }
    console.log('sprawdzam ARG: ' + argStatus)

    result = displayResult(argComputerMove, argPlayerMove)
    printMessage('Zagrałem ' + argComputerMove + ', a Ty zagrałeś ' + argPlayerMove + '. ' + result);

}




document.querySelector('.play-stone').addEventListener('click', function() {
    playGame(1);
});
document.querySelector('.play-paper').addEventListener('click', function() {
    playGame(2);
});
document.querySelector('.play-scissors').addEventListener('click', function() {
    playGame(3);
});



/* Results Module */

countComputer = 0;
countPlayer = 0;

function whoWon(countComputer, countPlayer) {
    clearResults()
    if (argStatus == 1) {
        countComputer += 1;
        return countComputer;
        console.log("Won Computer: " + countComputer);
    } else if (argStatus == 2) {
        countPlayer += 1;
        return countPlayer;
        console.log("Won Player: " + countPlayer);
    }
}

how = whoWon(countComputer, countPlayer)

var buttonClick = document.querySelector("#buttons");
count = 0;
buttonClick.addEventListener('click', function() {

    count += 1;
    clearResults()
    printResults('MakuBot:' + whoWon(countComputer, countPlayer) + "<br/>You:" + countPlayer + "<br/>Sessions held:" + '<span>' + count + '<span>');
});



// var buttonClick = document.querySelector("#buttons");
// count = 0;
// buttonClick.onclick = function() {
//     count += 1;
//     clearResults()
//     printResults('MakuBot:' + whoWon(countComputer, countPlayer) + "<br/>You:" + countPlayer + "<br/>Sessions held:" + '<span>' + count + '<span>');
// };






document.querySelector('#panel').addEventListener('click', function() {
    alert("Hello WOrld");
    document.querySelector('#results').classList.toggle('none');
});




// function showPanel() {
//     // document.getElementById("panel").onclick = function() {
//     //     alert("Hello WOrld");
//     document.getElementById('result').classList.toggle("active");
//     document.getElementById('result').classList.toggle("none");
// }

//     document.element2.onclick = function() {
//         element.classList.toggle("active");
//         document.element('none').classList.toggle("active");
//     }
// }


// document.getElementById('panel').onclick = function() {
//     document.getElementsByClassName('none').classList.toggle("active");
// }