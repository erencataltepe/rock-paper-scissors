const selectionButtons = document.querySelectorAll(".selection-buttons");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const newGameButton = document.getElementById("new-game-button");
const announcement = document.getElementById("announcement");

selectionButtons.forEach((button) => {
  button.addEventListener("click", (e) =>{
    game(e.target.id);
  })
})

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomSelection = Math.floor(Math.random() * options.length);
  return options[randomSelection];
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
}
