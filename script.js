let playerScore = 0;
let computerScore = 0;

const scoreboard = document.querySelector(".scoreboard");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

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

    if(playerChoice === computerChoice) {
        result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
        It's a tie!`;
    } else {

        if(playerChoice === "rock") {

            if(computerChoice === "paper") {
                result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
                You lose! ${computerChoice} beats ${playerChoice}`;
                computerScore += 1;
            } else {
                result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
                You win! ${playerChoice} beats ${computerChoice}`;
                playerScore += 1;
            }
        }

        if(playerChoice === "paper") {

            if(computerChoice === "scissors") {
                result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
                You lose! ${computerChoice} beats ${playerChoice}`;
                computerScore += 1;
            } else {
                result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
                You win! ${playerChoice} beats ${computerChoice}`;
                playerScore += 1;
            }
        }

        if(playerChoice === "scissors") {

            if(computerChoice === "rock") {
                result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
                You lose! ${computerChoice} beats ${playerChoice}`;
                computerScore += 1;
            } else {
                result.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}.
                You win! ${playerChoice} beats ${computerChoice}`;
                playerScore += 1;
            }
        }
    }
    updateScore();
    
    if(playerScore === 5 || computerScore === 5) {
        gameOver();
    }
}

function updateScore() {
    scoreboard.textContent = `Score: ${playerScore} to ${computerScore}`;
}

function gameOver() {
    if(playerScore === 5) {
        result.textContent = `GAME OVER: YOU WIN!`;
    } else {
        result.textContent = `GAME OVER: YOU LOSE!`;
    }
    disableButtons();
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}