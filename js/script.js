function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);

}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';

}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier'
} else if (playerInput == '3') {
    playerMove = 'nożyce'
} else { playerMove = 'nieznany ruch' }

let randomNumber = Math.floor(Math.random() * 3 + 1);
//let randomNumber = Math.floor(Math.random() * 10) + 10;

computerMove = randomNumber

if (computerMove == '1') {
    computerMove = 'kamień';
} else if (computerMove == '2') {
    computerMove = 'papier'
} else { computerMove = 'nożyce' }


if (computerMove == 'kamień' && playerMove == 'papier') {
    result = 'Ty wygrywasz!';
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    result = 'No to mamy remis';
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    result = 'Yupi joł wygrałem, a Ty przegrałeś.';
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    result = 'W.Y.G.R.A.Ł.E.Ś';
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    result = 'Remis. Zagrajmy jeszcze raz!.';
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    result = 'O kto tutaj jest mistrzem? Wygrałem. Szach mat!';
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    result = 'Ha! I am the Champion.';
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    result = 'Buuu to niesprawiedliwe. Ja chce wygrać!';
} else if (computerMove == 'papier' && playerMove == 'papier') {
    result = 'Heh kto ten program stworzył. Znowu remis?';
} else if (computerMove == 'papier' && playerMove == 'nieznany ruch') {
    result = 'Wpisz Synu poprawną wartość.';
} else if (computerMove == 'nożyce' && playerMove == 'nieznany ruch') {
    result = 'Coś Ci ręcę drżą. Wpisz poprawną wartość';
} else if (computerMove == 'kamień' && playerMove == 'nieznany ruch') {
    result = 'No co tam? Masz do wyboru 1 , 2 lub 3';
}

printMessage('Zagrałem ' + computerMove + ', a Ty zagrałeś ' + playerMove + '. ' + result);