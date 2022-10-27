// Test if jsciprt works
console.log("Hello, world!");

// Randomly return Rock Paper Scissors
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);

    if (randomNumber === 1){
        return "Rock";
    }
    else if (randomNumber === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

// Single round function
function singleGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let output = null;

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            output = "Nobody Wins";
        }
        else if (computerSelection === "paper") {
            output = "You Lose! Paper beats Rock";
        }
        else {
            output = "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            output = "You Win! Paper beats Rock";
        }
        else if (computerSelection === "paper") {
            output = "Nobody Wins";
        }
        else {
            output = "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            output = "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === "paper") {
            output = "You Win! Scissors beats Paper"
        }
        else {
            output = "Nobody Wins";
        }
    }
    return output;
}