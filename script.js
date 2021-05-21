window.onload = init;
let playerScoreValue = 0;
let computerScoreValue = 0;

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
        document.getElementById("winGif").style.display="block";
        document.getElementById("resultDisplay").style.color="green";
        return "You Won !";
    } else {
        document.getElementById("loseGif").style.display="block";
        document.getElementById("resultDisplay").style.color="red";
        return "You Losed !";
    }
}


function stringToIcon(strHand) {
    if (strHand.toLowerCase() === "rock") {
        return "fas fa-hand-rock";
    }
    if (strHand.toLowerCase() === "paper") {
        return "fas fa-hand-paper";
    }
    if (strHand.toLowerCase() === "scissors") {
        return "fas fa-hand-scissors";
    }
    return "fas fa-question";
}


function handsColoring(result) {
    if (result.toLowerCase().includes("win")) {
        document.getElementById("playerHand").style.color = "green";
        document.getElementById("computerHand").style.color = "red";
    } else if (result.toLowerCase().includes("lose")) {
        document.getElementById("playerHand").style.color = "red";
        document.getElementById("computerHand").style.color = "green";
    } else {
        document.getElementById("playerHand").style.color = "initial";
        document.getElementById("computerHand").style.color = "initial";
    }
}

function gameResult (playerSelection) {
    if (computerScoreValue < 5 && playerScoreValue < 5) {
        let computerSelection = computerPlay();
        // display played hands
        document.getElementById("playerHand").className = stringToIcon(playerSelection) 
                                                        + " display-1 mx-5";
        document.getElementById("computerHand").className = stringToIcon(computerSelection) 
                                                        + " display-1 mx-5";
        //play round
        let result = playRound(playerSelection, computerSelection);
        handsColoring(result); //Colorize hands
        let scoreBoard = scoreCounter(playerScoreValue, computerScoreValue, result);
        playerScoreValue = scoreBoard[0];
        computerScoreValue = scoreBoard[1];
        document.getElementById("playerScore").innerHTML = playerScoreValue;
        document.getElementById("computerScore").innerHTML = computerScoreValue;
        if (computerScoreValue >= 5 || playerScoreValue >= 5) {
            document.getElementById("resultDisplay").innerHTML = gameWinner(playerScoreValue, computerScoreValue);
            document.getElementById("resetGameControls").style.display="block";
        } else {
            document.getElementById("resultDisplay").innerHTML = result;
        }
    }
}


function gameReset(){
    location.reload();
}


function init() {

    document.getElementById("btnRock").addEventListener("click", function() {
        gameResult("rock");
      });
    document.getElementById("btnPaper").addEventListener("click", function() {
        gameResult("paper");
      });
    document.getElementById("btnScissors").addEventListener("click", function() {
        gameResult("scissors");
      });
    document.getElementById("btnResetGame").addEventListener("click", function() {
        gameReset();
      });
}


// play by console
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     while (computerScore < 5 && playerScore < 5) {
//         let playerSelection = prompt("What do you play? Rock, Paper or Scissors", "Rock");
//         if (playerSelection === '' || playerSelection === null) {
//             return;
//            }
//         let computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
        
//         let scoreBoard = scoreCounter(playerScore, computerScore, result);
//         playerScore = scoreBoard[0];
//         computerScore = scoreBoard[1];
//         console.log(result, "\n\nActual score:\nPlayer: ", playerScore,"\nComputer: ",computerScore,"\n");
//     }
    
//     console.log(gameWinner(playerScore, computerScore), "\n")
// }
// game();