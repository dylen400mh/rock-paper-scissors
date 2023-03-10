function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[choiceIndex];

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose Rock, Paper, Scissors");

    return playerChoice;
}

function captializeFirstChar(string) {
    let firstChar = string.charAt(0);
    let remainingString = string.slice(1);

    return firstChar.toUpperCase() + remainingString.toLowerCase();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {

        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;

}

function getScore() {
    return `${playerScore}-${computerScore}`;
}

function wonGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return true;
    }

    return false;
}

function displayEndMessage() {
    if (won) {
        return "You won the game! Congratulations!";
    } else if (playerScore === computerScore) {
        return "You tied the game!";
    }

    return "You lost the game! Better luck next time.";
}

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice()
        playerSelection = captializeFirstChar(playerSelection);
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(getScore());
    }

    won = wonGame(playerScore, computerScore);
    console.log(displayEndMessage());
}

const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;
let won;

game();




