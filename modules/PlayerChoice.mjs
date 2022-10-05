export const getPlayerChoice = () => {
    const regex = /rock|paper|Scissors/i
    const choice = prompt("chose your weapon: ")
    if (regex.test(choice)){
        return choice.toLowerCase();
    } else {
        console.log("not valid, choice between rock, paper and scissors")
        getPlayerChoice()
    }
}