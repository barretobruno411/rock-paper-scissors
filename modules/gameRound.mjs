export const gameRound = (computer, player) => {
  const computerChoice = computer();
  const playerChoice = player;
  if (computerChoice === playerChoice) {
    return `Draw! ${playerChoice} and ${computerChoice} are the same`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${playerChoice}`
  }
};
