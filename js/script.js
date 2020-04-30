let randomNumber = Math.floor(Math.random() * 3 + 1);
//let randomNumber = Math.floor(Math.random() * 10) + 10;


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
} else { playerMove = 'nożyce' }


printMessage('Zagrałem ' + randomNumber + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');