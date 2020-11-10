const selectionButtons = document.querySelectorAll(".selection-buttons");

selectionButtons.forEach((button) => {
  button.addEventListener("click", (e) =>{
    console.log(e.target.id);
  })
})

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const randomSelection = Math.floor(Math.random() * options.length);
  return options[randomSelection];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection.toLowerCase() == "paper") {
        return -1
      } else if (computerSelection.toLowerCase() == "scissors") {
        return 1
      } else if (computerSelection.toLowerCase() == "rock") {
        return 0
      }
      break;
    case "scissors":
      if (computerSelection.toLowerCase() == "paper") {
        return 1 
      } else if (computerSelection.toLowerCase() == "rock") {
        return -1
      } else {
        return 0
      }
      break;
    case "paper":
      if (computerSelection.toLowerCase() == "scissors") {
        return -1
      } else if (computerSelection.toLowerCase() == "rock") {
        return 1
      } else {
        return 0
      }
      break;
    default:
      return "Error";
  }  
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  let playerSelection = prompt("Rock, paper or scissors?").toLocaleLowerCase();
  let computerSelection = computerPlay();
  let gameResult = playRound(playerSelection, computerSelection);

  switch(gameResult) {
    case 1:
      playerScore += 1;
      console.log("Player wins this round!");
      console.log(`Player score is ${playerScore}`);
      console.log(`Computer score is ${computerScore}`);
      break;
    case -1:
      computerScore += 1;
      console.log("Computer wins this round!");
      console.log(`Player score is ${playerScore}`);
      console.log(`Computer score is ${computerScore}`);
      break;
    case 0:
      console.log("It is a tie");
      console.log(`Player score is ${playerScore}`);
      console.log(`Computer score is ${computerScore}`);
      break;
    default:
      break;
  }
  
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It is a tie!");
  }
}
