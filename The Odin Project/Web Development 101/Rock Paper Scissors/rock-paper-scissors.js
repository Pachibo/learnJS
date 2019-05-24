function computerPlay() {
  let rNumber = Math.floor(Math.random() * 3);
  if (rNumber === 0) return "scissor";
  else if (rNumber === 1) return "paper";
  else return "rock";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) return "draw";
  if (
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function game() {
  let counter = 0,
    computerWins = 0,
    playerWins = 0,
    rules = true;
  while (counter < 5) {
    let input = prompt('input: "rock", "paper" or "scissor"');
    if (input === undefined) {
      rules = false;
      break;
    }
    let result = playRound(input, computerPlay());
    if (result === "win") {
      playerWins++;
      console.log("You won this round.");
      console.log("Player wins: " + playerWins);
      console.log("Computer wins: " + computerWins);
    }
    if (result === "lose") {
      computerWins++;
      console.log("You lost this round.");
      console.log("Player wins: " + playerWins);
      console.log("Computer wins: " + computerWins);
    }
    if (result === "draw") {
      console.log("Draw.");
      console.log("Player wins: " + playerWins);
      console.log("Computer wins: " + computerWins);
      continue;
    }
    if (playerWins === 3 || computerWins === 3) break;
    counter++;
  }
  if (!rules) return "wrong input";
  if (playerWins === 3) console.log("You win.");
  else console.log("You lose.");
}

game();
