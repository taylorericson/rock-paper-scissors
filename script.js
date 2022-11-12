let playerScore = 0;
let computerScore = 0;
let winner = null;

console.log(getComputerChoice());

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

