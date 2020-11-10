const selectionButtons = document.querySelectorAll(".selection-buttons");

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
  let gameResult = playRound(playerSelection, computerSelection);

  switch(gameResult) {
    case 1:
      console.log("Player wins this round!");
      break;
    case -1:
      console.log("Computer wins this round!");
      break;
    case 0:
      console.log("It is a tie");
      break;
    default:
      break;
  }
  
}
