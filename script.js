let playerScore = 0;
let computerScore = 0;

let playerChoice = prompt("What is your choice? (rock, paper, or scissors)");   
let computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);


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
    let winner = null;
    
    if(playerChoice === computerChoice) {
        return "tie";
    } else {

        if(playerChoice === "rock") {

            if(computerChoice === "paper") {
                winner = "computer";
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore += 1;
            } else {
                winner = "player";
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore += 1;
            }
        }

        if(playerChoice === "paper") {

            if(computerChoice === "scissors") {
                winner = "computer";
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore += 1;
            } else {
                winner = "player";
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore += 1;
            }
        }

        if(playerChoice === "scissors") {

            if(computerChoice === "rock") {
                winner = "computer";
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore += 1;
            } else {
                winner = "player";
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore += 1;
            }
        }
        return winner;
    }
}