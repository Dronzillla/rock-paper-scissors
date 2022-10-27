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