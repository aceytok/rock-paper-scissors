// Function for computer choice- getComputerChoice()
// Write a function that randomly chooses between, "rock", "paper", or "scissors" and return that value
// Get a random value
// If the value equals 0 then return "rock"
// If the value equals 1 then return "paper"
// If the value equals 2 then return "scissors"
function getComputerChoice() {
    let choice = "";
    let value = Math.floor(Math.random() * 3);
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

//variables to keep score
let humanScore = 0;
let computerScore = 0;

    // Function to play a round vs the computer - playRound()
    // Get values for human and computer choices
    // If human chooses "rock" and computer chooses "paper", human loses
    // If human chooses "rock" and computer chooses "scissors", human wins
    // If human chooses "paper" and computer chooses "scissors", human loses
    // If human chooses "paper" and computer chooses "rock", human wins
    // If human chooses "scissors" and computer chooses "rock", human loses
    // If human chooses "scissors" and computer chooses "paper", human wins
    // If human and computer have the same choices, it's a tie
    // Increment the score depending on who wins, leaving it the same if it's a tie
    // Print a string based on the result of the round
function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#results");
    const scores = document.createElement("p");
    const winner = document.createElement("div");
    const reset = document.createElement("button");
    reset.textContent = "Reset"
    if (humanScore === 5 || computerScore === 5) {
        return;
    }
    if (humanChoice === computerChoice) {
        result.textContent = `Computer chose ${computerChoice}, It's a tie!`;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }
    else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        result.textContent = "You lose! Paper beats Rock";
        computerScore++;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }
    else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        result.textContent = "You win! Rock beats Scissors";
        humanScore++;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }
    else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        result.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }
    else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        result.textContent = "You win! Paper beats Rock";
        humanScore++;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }
    else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        result.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }
    else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        result.textContent = "You win! Scissors beats Paper";
        humanScore++;
        scores.textContent = `Human Score: ${humanScore}    Computer Score: ${computerScore}`
    }

    result.appendChild(scores);


    if (humanScore === 5) {
        winner.textContent = "You win!"
        result.appendChild(winner);
        result.appendChild(reset);
        reset.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            result.textContent = "Select an option to play again!"
        });
        
    }
    else if (computerScore === 5) {
        winner.textContent = "You lose! :("
        result.appendChild(winner);
        result.appendChild(reset);
        reset.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            result.textContent = "Select an option to play again!"
        });
    }
};

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
