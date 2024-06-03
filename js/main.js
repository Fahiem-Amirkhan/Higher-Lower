console.log('Main loaded');

//alerts
let firstName;
firstName = prompt('Please enter your name?');
const alertTwo = alert('Welcome ' + firstName + '.\n\nThis is the Higher and Lower game. Take a seat and enjoy the game! Before you start with the game, please choose a theme to experience the game in a different way.');

//functie voor thema knoppen
const themeOne = document.querySelector('.thema-1');
const themeTwo = document.querySelector('.thema-2');
const themeThree = document.querySelector('.thema-3');
const themeFour = document.querySelector('.thema-4');
const explanationButton = document.querySelector('.explanation-button');

themeOne.addEventListener('click', function () {

    document.body.style.setProperty('--background-color', 'black');
    document.body.style.setProperty('--text-color', '#33b5e5');
    themeOne.disabled = true;
    themeTwo.disabled = false;
    themeThree.disabled = false;
    themeFour.disabled = false;
});

themeTwo.addEventListener('click', function () {

    document.body.style.setProperty('--background-color', 'black');
    document.body.style.setProperty('--text-color', '#fd652d');
    themeTwo.disabled = true;
    themeOne.disabled = false;
    themeThree.disabled = false;
    themeFour.disabled = false;

});

themeThree.addEventListener('click', function () {

    document.body.style.setProperty('--background-color', 'black');
    document.body.style.setProperty('--text-color', 'lightgreen');
    themeThree.disabled = true;
    themeTwo.disabled = false;
    themeOne.disabled = false;
    themeFour.disabled = false;

});

themeFour.addEventListener('click', function () {
    
    document.body.style.setProperty('--background-color', 'black');
    document.body.style.setProperty('--text-color', 'orange');
    themeThree.disabled = false;
    themeTwo.disabled = false;
    themeOne.disabled = false;
    themeFour.disabled = true;

});

//naam van de spelers
const nameComputer = document.querySelector('.playerComputer');
const namePlayer = document.querySelector('.myPlayer').innerHTML = firstName;

//alle buttons opgehaald uit the HTML
const diceButton = document.querySelector('.dice-button');
const higherButton = document.querySelector('.higher-button');
const lowerButton = document.querySelector('.lower-button');
const goButton = document.querySelector('.go-button');

//credit systems en totals
let computerCredits = 0;
let playerCredits = 0;
let computerTotal = 0;
let computerTotalTwo = 0;
let playerTotal = 0;
let playerTotalTwo = 0;

//functie voor dobbel plaatjes
let diceListOne = document.querySelector('.computer-dice-one');
let diceListTwo = document.querySelector('.computer-dice-two');
let diceListThree = document.querySelector('.player-dice-one');
let diceListFour = document.querySelector('.player-dice-two');

const diceArray = ['&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861'];

//Functie dices
function diceLogo() {

    if (computerRoll === 1) {
        diceListOne.innerHTML = '&#9856';

    } else if (computerRoll === 2) {
        diceListOne.innerHTML = '&#9857';

    } else if (computerRoll === 3) {
        diceListOne.innerHTML = '&#9858';

    } else if (computerRoll === 4) {
        diceListOne.innerHTML = '&#9859';

    } else if (computerRoll === 5) {
        diceListOne.innerHTML = '&#9860';

    } else if (computerRoll === 6) {
        diceListOne.innerHTML = '&#9861';
    }

}
//Functie voor dice 2
function diceLogoTwo() {

    if (computerRollTwo === 1) {
        diceListTwo.innerHTML = '&#9856';

    } else if (computerRollTwo === 2) {
        diceListTwo.innerHTML = '&#9857';

    } else if (computerRollTwo === 3) {
        diceListTwo.innerHTML = '&#9858';

    } else if (computerRollTwo === 4) {
        diceListTwo.innerHTML = '&#9859';

    } else if (computerRollTwo === 5) {
        diceListTwo.innerHTML = '&#9860';

    } else if (computerRollTwo === 6) {
        diceListTwo.innerHTML = '&#9861';
    }

}
//Functie voor dice 3
function diceLogoThree() {

    if (playerRoll === 1) {
        diceListThree.innerHTML = '&#9856';

    } else if (playerRoll === 2) {
        diceListThree.innerHTML = '&#9857';

    } else if (playerRoll === 3) {
        diceListThree.innerHTML = '&#9858';

    } else if (playerRoll === 4) {
        diceListThree.innerHTML = '&#9859';

    } else if (playerRoll === 5) {
        diceListThree.innerHTML = '&#9860';

    } else if (playerRoll === 6) {
        diceListThree.innerHTML = '&#9861';
    }

}
//Functie voor dice 4
function diceLogoFour() {
    if (playerRollTwo === 1) {
        diceListFour.innerHTML = '&#9856';

    } else if (playerRollTwo === 2) {
        diceListFour.innerHTML = '&#9857';

    } else if (playerRollTwo === 3) {
        diceListFour.innerHTML = '&#9858';

    } else if (playerRollTwo === 4) {
        diceListFour.innerHTML = '&#9859';

    } else if (playerRollTwo === 5) {
        diceListFour.innerHTML = '&#9860';

    } else if (playerRollTwo === 6) {
        diceListFour.innerHTML = '&#9861';
    }

}

//message box
let startMessage = document.querySelector('.message-start');
let textAlert = document.querySelector('.message-box');

//alle knoppen worden hier gedeactiveerd
diceButton.disabled = true;
higherButton.disabled = true;
lowerButton.disabled = true;

//functie als je op "GO" drukt
goButton.addEventListener('click', function () {
    textAlert.textContent = 'Choose "Higher" or "Lower" button to begin';
    goButton.disabled = true;
    higherButton.disabled = false;
    lowerButton.disabled = false;
    computerCredits = 10;
    playerCredits = 10;

    updateGame();
});

let computerRoll;
let computerRollTwo;
let playerRoll;
let playerRollTwo;

//functie  0 = geen keuze, 1 = lower, 2 = higher
let chooseNumber = 0;

//functie als je op "Gooi dobbelsteen drukt"
diceButton.addEventListener('click', function () {

    diceButton.disabled = true;
    higherButton.disabled = false;
    lowerButton.disabled = false;

    computerRoll = diceRoll();
    computerRollTwo = diceRoll();
    playerRoll = diceRoll();
    playerRollTwo = diceRoll();

    diceLogo();
    diceLogoTwo();
    diceLogoThree();
    diceLogoFour();

    if (chooseNumber == 1) {

        //vergelijk de rol en update de credits van allebei
        if (computerRoll === playerRoll) {
            textAlert.textContent = 'The match is a draw';
            
        } else if (playerRoll < computerRoll) {
            //speler wint
            computerCredits -= 1;
            playerCredits += 1;
            textAlert.textContent = (firstName + ' has won the match');
            console.log(firstName +' received credits. ' + firstName + ' has ' + playerCredits +  ' credits.');
            console.log('Computer lost credits now, computer has ' + computerCredits + ' credits.');
            console.log(computerCredits == playerCredits) + (firstName + ' and computer has the same credits.')

        } else {
            //computer wint
            playerCredits -= 1;
            computerCredits += 1;
            textAlert.textContent = 'Computer has won the match';
            console.log('Computer received credits now, computer has ' + computerCredits + ' credits.');
            console.log(firstName + ' lost credits. ' + firstName + ' got '+ playerCredits + ' credits.');
            console.log(computerCredits == playerCredits) + ('computer and' + firstName + ' has the same credits.')
 
        } 
    }

    if (chooseNumber == 2) {
        if (computerRoll === playerRoll) {
            textAlert.textContent = 'The match is a draw.';
            console.log('The match is a draw.');
        }
        
        else if (playerRoll > computerRoll) {
            //speler wint
            computerCredits -= 1;
            playerCredits += 1;
            textAlert.textContent = (firstName + ' has won the match');
            console.log( firstName + ' received credits. ' + firstName + ' has ' + playerCredits + ' credits.');
            console.log('Computer lost credits, Computer has ' + computerCredits + ' credits.');
            console.log(computerCredits == playerCredits) + (firstName + ' and computer has the same credits.')

        } else {
            //computer wint
            playerCredits -= 1;
            computerCredits += 1;
            textAlert.textContent = 'Computer has won the match';
            console.log('Computer received credits now, computer has ' + computerCredits + ' credits.');
            console.log(firstName + ' lost credits. ' + firstName + ' has ' + playerCredits + ' credits.');
            console.log(computerCredits == playerCredits) + ('computer and' + firstName + ' has the same credits.')
        }
    }
    updateGame();
});

//functie die de game update
function updateGame() {
    document.querySelector('.computer-credits').textContent = computerCredits;
    document.querySelector('.player-credits').textContent = playerCredits;

    //functie voor GameOver en restarten van game
    if (computerCredits === 12) {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        diceButton.disabled = true;
        textAlert.textContent = 'Computer has won the game. Press "GO" to restart.';
        goButton.disabled = false;

    } else if (playerCredits === 12) {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        diceButton.disabled = true;
        textAlert.textContent = (firstName + ' has won the game. Press "GO" to restart.');
        goButton.disabled = false;

    }
}

//function roll dice
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

//update het totaal
playerTotal += playerRoll;
playerTotalTwo += playerRollTwo;
computerTotal += computerRoll;
computerTotalTwo += computerRollTwo;

//function "higher and lower" knop
higherButton.addEventListener('click', function () {

    textAlert.textContent = 'Click on "Throw Dice" button.';
    chooseNumber = 2;
    diceButton.disabled = false;
    lowerButton.disabled = true;
    higherButton.disabled = true;

});

lowerButton.addEventListener('click', function () {

    textAlert.textContent = 'Click on "Throw Dice" button.';
    chooseNumber = 1;
    diceButton.disabled = false;
    higherButton.disabled = true;
    lowerButton.disabled = true;
});