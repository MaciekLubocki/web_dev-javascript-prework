/*Game module */



{
    let countComputer = 0,
        countPlayer = 0;


    typing('Hello my name is MakuBot. I want to play with you Paper-Stone-Scissors! Lets have a try');

    printResults('ここに統計があります。ゲームを始めましょう。');

    function playGame(playerInput) {
        clearMessages();

        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return 'stone';
            } else if (argMoveId == '2') {
                return 'paper';
            } else if (argMoveId == '3') {
                return 'scissors';
            } else {
                console.log('I dont know the move with id ' + argMoveId + '.');
                return 'none';
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const argComputerMove = getMoveName(randomNumber);
        console.log('Wylosowana liczba to: ' + randomNumber);

        console.log('Gracz wpisał: ' + playerInput);
        const argPlayerMove = getMoveName(playerInput);


        function displayResult(argComputerMove, argPlayerMove) {
            console.log('moves:', argComputerMove, argPlayerMove);
            if (argComputerMove == 'stone' && argPlayerMove == 'paper') {
                countPlayer++;
                return 'You WON!';
            } else if (argComputerMove == 'stone' && argPlayerMove == 'stone') {
                return '...anyway, we have a draw';
            } else if (argComputerMove == 'stone' && argPlayerMove == 'scissors') {
                countComputer++;
                return 'Yuupi yo MakuBot won, & you got lost.';
            } else if (argComputerMove == 'scissors' && argPlayerMove == 'stone') {
                countPlayer++;
                return 'YOU WON';
            } else if (argComputerMove == 'scissors' && argPlayerMove == 'scissors') {
                return 'A draw. Lets play again!';
            } else if (argComputerMove == 'scissors' && argPlayerMove == 'paper') {
                countComputer++;
                return 'And who is Mr Master here? I won. Checkmate!';
            } else if (argComputerMove == 'paper' && argPlayerMove == 'stone') {
                countComputer++;
                return 'Ha! I am the Champion.';
            } else if (argComputerMove == 'paper' && argPlayerMove == 'scissors') {
                countPlayer++;
                return 'Buuu thats unfair. Me wanna win!';
            } else if (argComputerMove == 'paper' && argPlayerMove == 'paper') {
                return 'Heh tell me please who wrote such a dumb programm. We have a draw again.';
            } else if (argComputerMove == 'paper' && argPlayerMove == 'nieznany ruch') {
                return 'Write me Son corect number';
            } else if (argComputerMove == 'scissors' && argPlayerMove == 'nieznany ruch') {
                return 'Do you have any problem with your hands shaking?. Write apropriate number';
            } else if (argComputerMove == 'stone' && argPlayerMove == 'nieznany ruch') {
                return 'Knock knock, you can may chose 1, 2 or 3 Sir.';
            }

        }

        const result = displayResult(argComputerMove, argPlayerMove);

        typing('I have chosen ' + argComputerMove + ', and you got ' + argPlayerMove + '. ' + result);

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


    const buttonClick = document.querySelector("#buttons");
    let count = 0;
    buttonClick.addEventListener('click', function() {
        count += 1;
        clearResults();
        clearResults_top_Maku();
        clearResults_top_You();
        printResults('MakuBot:' + countComputer + "<br/>You:" + countPlayer + "<br/>Sessions held:" + '<span>' + count + '<span>');
        printResults_top_Maku('MakuBot:' + countComputer);

        printResults_top_You("You:" + countPlayer);

    });







    document.querySelector('#toggle--push--glow').addEventListener('click', function() {

        clearMessages();
        document.querySelector('.box').classList.toggle('none');
        clearMessages();
        document.querySelector('.box').classList.add('anim');
        clearMessages();
        document.querySelector('.box').classList.toggle('anim_out');
        clearMessages();
        document.querySelector('.beep').classList.toggle('anim_beep');
        clearMessages();
        document.querySelector('.beep').classList.toggle('none');
        clearMessages();
    });


    document.querySelector('.statistics').addEventListener('click', function() {
        document.querySelector('.result').classList.toggle('none');
        document.querySelector('.result').classList.toggle('anim');
        document.querySelector('#panel').classList.toggle('anim_out');
        document.querySelector('#panel').classList.toggle('none');
    });


    document.querySelector('#results').addEventListener('click', function() {
        document.querySelector('#results').classList.toggle('none');
        document.querySelector('#results').classList.toggle('anim');
        document.querySelector('#panel').classList.toggle('anim_out');
        document.querySelector('#panel').classList.toggle('none');
    });


    /* typing effect module */

    function typing(text) {
        const textElem = document.getElementById("messages");
        const speed = 40;

        for (let i = 0; i < text.length; i++) {
            setTimeout(function() {
                textElem.innerHTML += text[i];
            }, i * speed);
        }
    }
}