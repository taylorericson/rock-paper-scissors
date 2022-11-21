let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const scoreboard = document.querySelector(".scoreboard");
const playerScoreboard = document.querySelector(".player-scoreboard");
const computerScoreboard = document.querySelector(".computer-scoreboard");
const choose = document.querySelector(".choose");
const result = document.querySelector(".result");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}       

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore += 1;
        choose.textContent = "You win!";
        result.textContent = `${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === computerChoice) {
        choose.textContent = "It's a tie!";
        result.textContent = `You both chose ${playerChoice}`;
    } else {
        computerScore += 1;
        choose.textContent = "You lose!";
        result.textContent = `${computerChoice} beats ${playerChoice}`;
    }
    updateScore();
    
    if(playerScore === 5 || computerScore === 5) {
        gameOver();
    }
}

function updateScore() {
    playerScoreboard.textContent = `Player score: ${playerScore}`;
    computerScoreboard.textContent = `Computer score: ${computerScore}`;
}

function gameOver() {
    if(playerScore === 5) {
        result.textContent = `GAME OVER: YOU WIN!🎉`;
    } else {
        result.textContent = `GAME OVER: YOU LOSE!😔`;
    }
    disableButtons();
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}