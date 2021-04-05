function computerPlay() {
    let availablePositions = ["Rock", "Paper", "Scissors"];
    return availablePositions[Math.floor(Math.random() * availablePositions.length)];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === "rock") {
        if (playerSelection.toLowerCase() === "rock") {
            return "Draw ! you both rock !";
        } else if (playerSelection.toLowerCase() === "paper") {
            return "You Win ! Paper beats Rock !";
        } else if (playerSelection.toLowerCase() === "scissors") {
            return "You Lose ! Rock beats Scissors !";
        } else {
            return "error";
        }
    } else if (computerSelection.toLowerCase() === "paper") {
        if (playerSelection.toLowerCase() === "paper") {
            return "Draw ! you think the same !";
        } else if (playerSelection.toLowerCase() === "scissors") {
            return "You Win ! Scissors beats Paper !";
        } else if (playerSelection.toLowerCase() === "rock") {
            return "You Lose ! Paper beats Rock !";
        } else {
            return "error";
        }
    } else if (computerSelection.toLowerCase() === "scissors") {
        if (playerSelection.toLowerCase() === "scissors") {
            return "Draw ! you think the same !";
        } else if (playerSelection.toLowerCase() === "rock") {
            return "You Win ! Rock beats Scissors !";
        } else if (playerSelection.toLowerCase() === "paper") {
            return "You Lose ! Scissors beats Paper !";
        } else {
            return "error";
        }
    } else {
        return "error";
    }
}

function scoreCounter(playerScore, computerScore, result) {
    if (result.toLowerCase().includes("win")) {
        playerScore++;
    } else if (result.toLowerCase().includes("lose")) {
        computerScore++;
    }
    return [playerScore, computerScore];
}

function gameWinner(playerScore, computerScore) {
    if (playerScore >= 5) {
        return "You Won !";
    } else {
        return "You Losed !";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (computerScore < 5 && playerScore < 5) {
        let playerSelection = prompt("What do you play? Rock, Paper or Scissors", "Rock");
        if (playerSelection === '' || playerSelection === null) {
            return;
           }
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        
        let scoreBoard = scoreCounter(playerScore, computerScore, result);
        playerScore = scoreBoard[0];
        computerScore = scoreBoard[1];
        console.log(result, "\n\nActual score:\nPlayer: ", playerScore,"\nComputer: ",computerScore,"\n");
    }
    
    console.log(gameWinner(playerScore, computerScore), "\n")
}
game();