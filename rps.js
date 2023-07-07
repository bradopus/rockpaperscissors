let computerScore = 0;
let playerScore = 0;

const choices = ["rock","paper","scissors"];

/* Randomly returns Rock, Paper, or Scissors */
function getComputerChoice() {

    let result = Math.floor(Math.random() * 3);
    return choices[result]; // Returns txt value of choices array
}

// Grabs results to be changed within playRound()
const results = document.querySelector('.results');

// Creates events for each button
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className); // plays a round based on class name
    });
});


// Displays score
function score() {
    const scores = document.querySelector('.scores');
    scores.textContent = `Player: ${playerScore} | Computer: ${computerScore}`


    // Determines if either player or computer reaches 5, displayers winner
    if (playerScore == 5) {
        scores.textContent = "You won the game!";
        clearScores();
    }

    if (computerScore == 5) {
        scores.textContent = "Oh, no!  You lost the game!";
        clearScores();
    }
};

// Function to clear scores
function clearScores() {
    playerScore = 0;
    computerScore = 0;
}

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
                results.textContent = "You both chose rock!  Tie!";
                score();
                break;
            case "paper":
                computerScore++;
                results.textContent = "Computer wins!  Paper beats rock.";
                score();
                break;
            case "scissors":
                playerScore++;
                results.textContent = "You win!  Rock beats scissors!";
                score();
                break;
        }
    }
    else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                playerScore++
                results.textContent = "You win!  Paper beats rock.";
                score();
                break;
            case "paper":
                results.textContent = "You both chose paper!  Tie!";
                score();
                break;
            case "scissors":
                computerScore++;
                results.textContent = "Computer wins!  Scissors beats paper!";
                score();
                break;
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                computerScore++;
                results.textContent = "Computer wins!  Rock beats scissors!";
                score();
                break;
            case "paper":
                playerScore++;
                results.textContent = "You win!  Scissors beats paper!";
                score();
                break;
            case "scissors":
                results.textContent = "You both chose scissors!  Tie!";
                score();
                break;
        }
    }
    else {
        console.log("Invalid answer, please try again.")
    }

}



// Commenting out old logic that plays 5 rounds

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