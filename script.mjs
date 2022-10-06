import {getComputerChoice} from "./modules/ComputerChoice.mjs"
import {getPlayerChoice} from "./modules/PlayerChoice.mjs"
import {gameRound} from "./modules/gameRound.mjs"

console.log(gameRound(getComputerChoice, getPlayerChoice))



