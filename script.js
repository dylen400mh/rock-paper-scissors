const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[choiceIndex];

    return computerChoice;
}