let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let rand = Math.floor((Math.random() * 3));
    console.log(rand);
    if (rand === 0) {
        return ("rock");
    } else if (rand === 1) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

let getHumanChoice = () => {
    let humanChoice = prompt("Enter you choice, 1 for Rock, 2 for Paper, and 3 for Scissors ");
    let choice = parseInt(humanChoice);
    if (choice === 1) {
        return ("rock");
    } else if (choice === 2) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

let playRound = (humanChoice, computerChoice) => {
    console.log(humanChoice, computerChoice);
}

let playGame = () => {
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("tie");

    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();