/*Game module */


var countComputer = 0;
var countPlayer = 0;


printMessage('Paper-Stone-Scissors is simple but yet funny game to play. Win with the MakuBot');
// printResult('Baku Baku');

function playGame(playerInput) {

    clearMessages();

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

    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var argComputerMove = getMoveName(randomNumber);
    console.log('Wylosowana liczba to: ' + randomNumber);

    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    var argPlayerMove = getMoveName(playerInput);



    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            countPlayer++;
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {

            return 'No to mamy remis';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            countComputer++;
            return 'Yupi joł wygrałem, a Ty przegrałeś.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            countComputer++;
            return 'W.Y.G.R.A.Ł.E.Ś';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {

            return 'Remis. Zagrajmy jeszcze raz!.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            countComputer++;
            return 'O kto tutaj jest mistrzem? Wygrałem. Szach mat!';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            countComputer++;
            return 'Ha! I am the Champion.';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            countPlayer++;
            return 'Buuu to niesprawiedliwe. Ja chce wygrać!';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {

            return 'Heh kto ten program stworzył. Znowu remis?';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {

            return 'Wpisz Synu poprawną wartość.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {

            return 'Coś Ci ręcę drżą. Wpisz poprawną wartość';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {

            return 'No co tam? Masz do wyboru 1 , 2 lub 3';
        }

    }

    result = displayResult(argComputerMove, argPlayerMove);
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




var buttonClick = document.querySelector("#buttons");
var count = 0;
buttonClick.addEventListener('click', function() {
    count += 1;
    clearResults();
    printResults('MakuBot:' + countComputer + "<br/>You:" + countPlayer + "<br/>Sessions held:" + '<span>' + count + '<span>');
});




// document.querySelector('#panel').addEventListener('click', function() {

//     document.querySelector('#results').classList.toggle('none');
// });


document.querySelector('#toggle--push--glow').addEventListener('click', function() {
    // alert('TEST1');
    // document.querySelector('.box').classList.remove('none');

    document.querySelector('.box').classList.toggle('none');
    document.querySelector('.box').classList.toggle('anim');
    document.querySelector('.beep').classList.toggle('anim_beep');
    document.querySelector('.beep').classList.toggle('none');
});




document.querySelector('.statistics').addEventListener('click', function() {
    document.querySelector('.result').classList.toggle('none');
    document.querySelector('.result').classList.toggle('anim');
    document.querySelector('#panel').classList.toggle('none');

});


document.querySelector('#results').addEventListener('click', function() {
    // alert('TEST1');
    document.querySelector('#results').classList.toggle('none');

    document.querySelector('#panel').classList.toggle('none');

});