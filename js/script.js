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

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            return 'Ty wygrywasz!';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            return 'No to mamy remis';
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            return 'Yupi joł wygrałem, a Ty przegrałeś.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            return 'W.Y.G.R.A.Ł.E.Ś';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            return 'Remis. Zagrajmy jeszcze raz!.';
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            return 'O kto tutaj jest mistrzem? Wygrałem. Szach mat!';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            return 'Ha! I am the Champion.';
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
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

    result = displayResult(argComputerMove, argPlayerMove)
    printMessage('Zagrałem ' + argComputerMove + ', a Ty zagrałeś ' + argPlayerMove + '. ' + result);

}

document.querySelector('.play-stone').addEventListener('click', function() {
    playGame(3);
});
document.querySelector('.play-paper').addEventListener('click', function() {
    playGame(2);
});
document.querySelector('.play-scissors').addEventListener('click', function() {
    playGame(1);
});

// playGame(3);