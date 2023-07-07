let computerScore = 0;
let playerScore = 0;

const choices = ["rock","paper","scissors"];

/* Randomly returns Rock, Paper, or Scissors */
function getComputerChoice() {

    let result = Math.floor(Math.random() * 3);
    return choices[result]; // Returns txt value of choices array
}

// Creates events for each button
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className);
    });
});

/* Plays round, returns winner
Ex: "You Lose! Paper beats Rock" */
function playRound(playerSelection, computerSelection) {
    
    // Old way of asking
    // playerSelection = prompt("Rock, paper, or scissors?");

    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return console.log("You both chose rock!  Tie!");
                break;
            case "paper":
                computerScore++;
                return console.log("Computer wins!  Paper beats rock.");
                break;
            case "scissors":
                playerScore++;
                return console.log("You win!  Rock beats scissors!");
                break;
        }
    }
    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                playerScore++
                return console.log("You win!  Paper beats rock.");
                break;
            case "paper":
                return console.log("You both chose paper!  Tie!");
                break;
            case "scissors":
                computerScore++;
                return console.log("Computer wins!  Scissors beats paper!");
                break;
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                computerScore++;
                return console.log("Computer wins!  Rock beats scissors!");
                break;
            case "paper":
                playerScore++;
                return console.log("You win!  Scissors beats paper!");
                break;
            case "scissors":
                return console.log("You both chose scissors!  Tie!");
                break;
        }
    }
    else {
        console.log("Invalid answer, please try again.")
    }

}

// Commenting out logic that plays 5 rounds

/*
// Plays 5 rounds, keeps score, declares results
function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("Player Score: " + playerScore + "  Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }

    playerScore = 0;
    computerScore = 0;
}
*/