function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) { return "rock"; }
    else if (num === 1) { return "paper"; }
    else { return "scissor"; }
}

// we can definitely reorder this into 3 cases: tie, player-win, computer win
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "It's a tie."
        } else if (computerSelection === "paper") {
            return "Computer wins."
        } else {
            return "You win."
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win."
        } else if (computerSelection === "paper") {
            return "It's a tie."
        } else {
            return "Computer win."
        }
    } else {
        if (computerSelection === "rock") {
            return "Computer wins."
        } else if (computerSelection === "paper") {
            return "You win."
        } else {
            return "It's a tie."
        }
    }
}

// play 5 games
for (let i = 0; i < 5; i++){
    let playerSelection = parseInt(prompt("Please enter rock-paper-scissor: ")).toLowerCase;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}