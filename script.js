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
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    return `You lose! ${computerSelection} beats ${playerSelection}.`;

}

const choices = ["Rock", "Paper", "Scissors"]

let playerSelection = getPlayerChoice()
playerSelection = captializeFirstChar(playerSelection);
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));


