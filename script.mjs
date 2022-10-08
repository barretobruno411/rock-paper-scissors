import { game } from "./modules/game.mjs";
import { gameRound } from "./modules/gameRound.mjs";
import { getComputerChoice } from "./modules/ComputerChoice.mjs";

const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

let score = 0

let plays = 0

const regex = /win/i

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let result = "";
    result = gameRound(getComputerChoice, e.target.textContent)

    plays += 1

    if (regex.test(result)) score += 1;

    console.log("score: " + score)
    console.log("plays: " + plays)

    display.textContent = `score: ${score} | display: ${result}`;

    if (plays === 5) {
        if (score >= 3) {
            display.textContent = `GAME OVER
            You win, your score was ${score}`
            score = 0;
            plays = 0;
            
        } else {
            display.textContent = `GAME OVER
            You lose, your score was ${score}`
            score = 0;
            plays = 0;
        }
    }
});
});


// game();
