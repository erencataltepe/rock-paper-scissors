function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  } else if (randomNumber == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userChoice = prompt("What is your choice?");
  return userChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "rock") {
      console.log("It's a draw");
    } else if (computerChoice == "rock" && humanChoice == "paper") {
      console.log("You win! Paper beats Rock");
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("You lose! Rock beats scissors.");
    } else if (computerChoice == "paper" && humanChoice == "paper") {
      console.log("It's a draw");
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
      console.log("You win! Scissors beats paper.");
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("You lose! Paper beats Rock");
    } else if (computerChoice == "scissors" && humanChoice == "scissors") {
      console.log("It's a draw");
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
      console.log("You win! Scissors beats rock!");
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("You lose! Scissors beats paper!");
    } else console.log("Invalid input!");
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

playGame();
