// Global variables for keeping score
let humanScore = 0;
let computerScore = 0;

// Function for computer choice- getComputerChoice()
// Write a function that randomly chooses between, "rock", "paper", or "scissors" and return that value
// Get a random value
// If the value equals 0 then return "rock"
// If the value equals 1 then return "paper"
// If the value equals 2 then return "scissors"

function getComputerChoice() {
    let choice = "";
    let value = Math.floor(Math.random() * 3);
    console.log(value);
    if (value === 0) {
        choice = "rock";
    }
    else if (value === 1) {
        choice = "paper";
    }
    else {
        choice = "scissors"
    }

    return choice;
}

console.log(getComputerChoice());

// Function for human choice - getHumanChoice()
// Get input from user and return that value

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:")
    return choice;
}

let result = getHumanChoice();
console.log(result);

