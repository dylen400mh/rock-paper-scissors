function getComputerChoice() {
    let choiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[choiceIndex];

    return computerChoice;
}

function getPlayerChoice(e) {
    return e.target.textContent;
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

    //new code here to get player choice and run match using event listener
    let playerSelection;
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", (e) => {
        playerSelection = getPlayerChoice(e);
        let computerSelection = getComputerChoice();


        const result = document.querySelector(".result");
        result.textContent = playRound(playerSelection, computerSelection);

        const score = document.querySelector(".score");
        score.textContent = getScore();

        //if statement is needed else program will display end message every round
        if (playerScore === 5 || computerScore === 5) {
            won = wonGame(playerScore, computerScore);
            const endMessage = document.querySelector(".end-message");
            endMessage.textContent = displayEndMessage();
        }
    })); //all "game related" code sits inside eventListener function b/c we only want it to run when button is clicked
}


const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let computerScore = 0;
let won;











game();




