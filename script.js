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

function wonGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return true;
    }

    return false;
}

function displayEndMessage() {
    if (wonGame()) {
        return `You win! The final score is ${playerScore}-${computerScore}`;
    } else if (playerScore === computerScore) {
        return `It's a tie! The final score is ${playerScore}-${computerScore}`;
    }

    return `You lose! The final score is ${playerScore}-${computerScore}`;
}

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice()
        playerSelection = captializeFirstChar(playerSelection);
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }

    wonGame(playerScore, computerScore);
    console.log(displayEndMessage());
}

const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;

game();




