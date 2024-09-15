let humanScore = 0;
let computerScore = 0;
let humanChoice;
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

// let getHumanChoice = () => {
//     let humanChoice = prompt("Enter you choice, 1 for Rock, 2 for Paper, and 3 for Scissors ");
//     if (humanChoice === null || humanChoice.trim() === "") {
//         console.log("Please enter a valid choice");
//     } else {
//         let choice = parseInt(humanChoice);
//         if (choice === 1) {
//             return ("rock");
//         } else if (choice === 2) {
//             return ("paper");
//         } else {
//             return ("scissors");
//         }
//     }
// }

let getHumanChoice = (btnID) => {
    let choice = btnID;
    if (choice === "btn1") {
        // console.log("rock");
        humanChoice = "rock";
    } else if (choice === "btn2") {
        // console.log("paper");
        humanChoice = "paper";
    } else {
        // console.log("scissors");
        humanChoice = "scissors";
    }
}

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        // console.log(button.id);
        getHumanChoice(button.id);
        playRound();
    })
})





let playRound = () => {
    let score = document.querySelector("#score");
    let winner = document.querySelector("#winner");
    let data = document.querySelector("#data");
    let computerChoice = getComputerChoice();
    console.log(humanChoice);

    let getdata = "Human: " + humanChoice + ", Computer: " + computerChoice;
    data.textContent = getdata;
    // console.log(getdata);
    if (humanChoice === "rock" && computerChoice === "paper") {
        let winnerData = "You lose! Paper beats Rock";
        computerScore++;
        round++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        let winnerData = "You win! Rock beats Scissors";
        humanScore++;
        round++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        let winnerData = "It's a tie! Playing another round...";
        round++;
        tie++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);


        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        score.textContent = p;
        winner.textContent = winnerData;
        // playRound();
        // playGame();
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        let winnerData = "You win! Paper beats Rock";
        humanScore++;
        round++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        let winnerData = "You lose! Scissors beat Paper";
        computerScore++;
        round++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        let winnerData = "It's a tie! Playing another round...";
        round++;
        tie++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);

        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
        // playRound();
        // playGame();
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        let winnerData = "You lose! Rock beat Scissors";
        computerScore++;
        round++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        let winnerData = "You win! Scissor beat Paper";
        humanScore++;
        round++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);
        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        let winnerData = "It's a tie! Playing another round...";
        round++;
        tie++;
        // console.log("ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie);


        let p = "ROUND: " + round + ", Human Score : " + humanScore + ", Computer Score: " + computerScore + ", Tie : " + tie;
        winner.textContent = winnerData;
        score.textContent = p;
        // playRound();
        // playGame();
    }
}

// let playGame = () => {
//     for (let i = 1; i <= temp; i++) {
//         if (round === 5) {
//             break;
//         }
//         else {
//             playRound();
//         }
//     }
// }
// console.log("You have 5 round");
// playGame();

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (e) => {
//     playRound();
// });
