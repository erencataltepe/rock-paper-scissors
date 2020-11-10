const selectionButtons = document.querySelectorAll(".selection-buttons");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const newGameButton = document.getElementById("new-game-button");
const announcement = document.getElementById("announcement");

selectionButtons.forEach((button) => {
  button.addEventListener("click", (e) =>{
    if (!isGameOver()) {
      game(e.target.id);
    }
  })
})

newGameButton.addEventListener("click", resetGame)


function resetGame() {
  playerScore.textContent = "0";
  computerScore.textContent = "0";
  announcement.textContent = "";
}

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomSelection = Math.floor(Math.random() * options.length);
  return options[randomSelection];
}

function isGameOver() {
  if (Number(playerScore.textContent) === 5) {
    announcement.textContent = "Congrats. You win the game.";
    return true;
  } else if (Number(computerScore.textContent) === 5) {
    announcement.textContent = "Sorry. Computer wins the game.";
    return true;
  } else {
    return false;
  }
}

function displayWinner(result) {
  switch (result) {
    case 1:
      announcement.textContent = "You win this round";
      return 1;
    case -1:
      announcement.textContent = "Computer wins this round";
      return -1;
    default:
      announcement.textContent = "It is a tie.";
      return 0;
  }
}

function changeScore(result) {
  switch (result) {
    case 1:
      playerScore.textContent = Number(playerScore.textContent) + 1;
      break;
    case -1:
      computerScore.textContent = Number(computerScore.textContent) + 1;
    default:
      break;
  }
}


function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        return -1
      } else if (computerSelection == "scissors") {
        return 1
      } else if (computerSelection == "rock") {
        return 0
      }
      break;
    case "scissors":
      if (computerSelection == "paper") {
        return 1 
      } else if (computerSelection == "rock") {
        return -1
      } else {
        return 0
      }
      break;
    case "paper":
      if (computerSelection == "scissors") {
        return -1
      } else if (computerSelection == "rock") {
        return 1
      } else {
        return 0
      }
      break;
    default:
      return "Error";
  }  
}

function game(playerSelection) {
  
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);
  displayWinner(roundResult);
  changeScore(roundResult);
  isGameOver();
}
