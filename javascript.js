console.log("Hello World!")

// Function for computer choice- getComputerChoice
// Write a function that randomly chooses between, "rock", "paper", or "scissors" and return that value
// Get a random value
// If the value is less than 33 then return "rock"
// If the value is greater than or equal to 33 and less than 66 then return "paper"
// If the value is greater than or equal to 66 and less than 99 then return "scissors"

function getComputerChoice() {
    let choice = "";
    let value = Math.floor(Math.random() * 100);
    // console.log(value);
    if (value < 33) {
        choice = "rock";
    }
    else if (value >= 33 && value < 66) {
        choice = "paper";
    }
    else {
        choice = "scissors"
    }

    return choice;
}

// console.log(getComputerChoice());

