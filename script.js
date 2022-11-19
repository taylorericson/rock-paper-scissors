let playerScore = 0;
let computerScore = 0;
let playerChoice;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});


function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    
    if(choice === 1) {
        return "rock";
    } else if(choice === 2) {
        return "paper"; 
    } else {    
        return "scissors";
    }
}       

function playRound(playerChoice, computerChoice) {
    console.log(`You chose ${playerChoice}. The computer chose ${computerChoice}.`);
    if(playerChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${playerChoice}`);
    } else {

        if(playerChoice === "rock") {

            if(computerChoice === "paper") {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore += 1;
            } else {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore += 1;
            }
        }

        if(playerChoice === "paper") {

            if(computerChoice === "scissors") {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore += 1;
            } else {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore += 1;
            }
        }

        if(playerChoice === "scissors") {

            if(computerChoice === "rock") {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore += 1;
            } else {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore += 1;
            }
        }
    }
}

function game() {

    if(playerScore === computerScore) {
        console.log("It's a tie game!");
    } else {
        playerScore > computerScore ? console.log("You win!") : console.log("You lose, better luck next time!");
    }
    console.log(`Final score: ${playerScore} to ${computerScore}`);
}