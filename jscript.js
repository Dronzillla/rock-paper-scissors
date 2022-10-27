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
function playRound(playerSelection, computerSelection) {
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

// Play 5 round game
function game () {
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let playerPoints = 0;
    let computerPoints = 0;
    let draw = 0;

    // Loop 5 rounds
    for (let i = 0; i < 5; i++) {        
        let playerSelection;
        let dataValidation = 0;
        // Data validation so user can only put rock, paper, scissors (case insensitive)
        do {
            playerSelection = window.prompt("Make your choice: Rock, Paper, Scissors", "Rock");
            if (playerSelection.toLowerCase() == rock || playerSelection.toLowerCase() == paper || playerSelection.toLowerCase() == scissors) {
                dataValidation = 1;
            }
        }
        while (dataValidation != 1)
        let roundCount = 1 + i;
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        
        // Count cumulative points of players
        let roundWinner = winner.slice(4, 5);
        if (roundWinner == "W") {
            playerPoints += 1;
        }
        else if (roundWinner == "L") {
            computerPoints += 1;
        }
        else {
            draw += 1;
        }

        // Display results of a game
        console.log(`ROUND ${roundCount}. You chose ${playerSelection} and computer chose ${computerSelection}. ${winner}.`);
        if (i == 4) {
            if (playerPoints > computerPoints) {
                console.log("After 5 rounds YOU WIN!")
            }
            else if (playerPoints < computerPoints) {
                console.log("After 5 rounds YOU LOSE :(")
            }
            else {
                console.log("After 5 rounds NOBODY WINS")
            }
            console.log(`Your points: ${playerPoints}. Computer points: ${computerPoints}. Draw: ${draw}`);
        }
    } 
}