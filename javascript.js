// Function for computer choice- getComputerChoice()
// Write a function that randomly chooses between, "rock", "paper", or "scissors" and return that value
// Get a random value
// If the value equals 0 then return "rock"
// If the value equals 1 then return "paper"
// If the value equals 2 then return "scissors"
function getComputerChoice() {
    let choice = "";
    let value = Math.floor(Math.random() * 3);
    // console.log(value);
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

// console.log(getComputerChoice());

// Function for human choice - getHumanChoice()
// Get input from human and return that value
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:")
    return choice;
}

// let result = getHumanChoice();
// console.log(result);

// Function to play 5 rounds - playGame()
// Call playRound() 5 times
// Print and keep track of the scores
// Declare a winner based on whose score is higher
function playGame() {

    // Variables for keeping score
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
        let humanInput = humanChoice.toLowerCase();

        if (humanInput === computerChoice) {
            console.log("It's a tie!");
        }
        else if ((humanInput == "rock") && (computerChoice == "paper")) {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        else if ((humanInput == "rock") && (computerChoice == "scissors")) {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
        else if ((humanInput == "paper") && (computerChoice == "scissors")) {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        else if ((humanInput == "paper") && (computerChoice == "rock")) {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        else if ((humanInput == "scissors") && (computerChoice == "rock")) {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        else if ((humanInput == "scissors") && (computerChoice == "paper")) {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }

}

playGame();