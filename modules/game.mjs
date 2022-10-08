
import {getComputerChoice} from "./ComputerChoice.mjs"
import {getPlayerChoice} from "./PlayerChoice.mjs"
import {gameRound} from "./gameRound.mjs"
export const game = (round) => {
    const regex = /win/i
    const wons = []
    for (let i = 1; i <= 5; i++) {
        let roundResult = gameRound(getComputerChoice,getPlayerChoice())
        if (regex.test(roundResult)) wons.push("won")
        console.log(roundResult)
    }
    if (wons.length >= 3) {
        console.log("You won the game " + wons.length + " points")
    } else if (wons.length === 0){
        console.log(`"You lose the game, you score was ${wons.length}!`)
    } else {
        console.log(`"You lose the game, just make ${wons.length} points!`)
    }
}