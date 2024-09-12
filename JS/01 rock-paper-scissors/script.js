let humanScore = 0;
let computerScore = 0;
let round = 0;
let temp = 5;
let tie = 0;

let getComputerChoice = () => {
    let rand = Math.floor((Math.random() * 3));
    // console.log(rand);
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
    if (humanChoice === null || humanChoice.trim() === "") {
        console.log("Please enter a valid choice");
    } else {
        let choice = parseInt(humanChoice);
        if (choice === 1) {
            return ("rock");
        } else if (choice === 2) {
            return ("paper");
        } else {
            return ("scissors");
        }
    }
}


let playRound = () => {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log("Human: " + humanChoice + ", Computer: " + computerChoice);
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        round++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        round++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a tie! Playing another round...");
        round++;
        tie++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        // playRound();
        playGame();
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
        round++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore++;
        round++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a tie! Playing another round...");
        round++;
        tie++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        // playRound();
        playGame();
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beat Scissors");
        computerScore++;
        round++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissor beat Paper");
        humanScore++;
        round++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie! Playing another round...");
        round++;
        tie++;
        console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        // playRound();
        playGame();
    }
}

let playGame = () => {
    for (let i = 1; i <= temp; i++) {
        if (round === 5) {
            break;
        }
        else {
            playRound();
        }
    }
}
console.log("You have 5 round");
playGame();