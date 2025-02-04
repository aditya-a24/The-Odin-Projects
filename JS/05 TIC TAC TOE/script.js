// JavaScript DOM Logic
const gameBoardElement = document.getElementById("gameBoard");
const startButton = document.getElementById("startBtn");
const restartButton = document.getElementById("restartBtn");
const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");
const statusTextElement = document.getElementById("statusText");
document.getElementById("playWithComputerBtn").addEventListener("click", () => {
    Game.startGame(player1NameInput.value || "Player", "Computer", true);
});


for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    gameBoardElement.appendChild(cell);
}

startButton.addEventListener("click", () => {
    const player1Name = player1NameInput.value || "Player 1";
    const player2Name = player2NameInput.value || "Player 2";
    Game.startGame(player1Name, player2Name);
    renderBoard();
    statusTextElement.textContent = `${player1Name}'s, turn.`;
});

restartButton.addEventListener("click", () => {
    Game.startGame(player1NameInput.value || "Player 1", player2NameInput.value || "Player 2");
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
    statusTextElement.textContent = `Game restarted. ${player1NameInput.value || "Player 1"}'s turn.`;
})

gameBoardElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell")) {
        const index = e.target.getAttribute("data-index");
        Game.playTurn(parseInt(index));
        renderBoard();
    }
})

function renderBoard() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
        cell.textContent = Gameboard.board[index] || "";
    });
}


const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]; // 3x3 grid

    const placeMark = (index, mark) => {
        if (board[index] === "") {
            board[index] = mark;
            return true;
        }
        return false; // cell already taken
    }

    const checkWinner = () => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7,], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition; // destructuring of array
            // console.log(`a: ${a}, b: ${b}, c: ${c}`)
            // console.log(board[a], board[b], board[c])
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                return board[a]; // Return 'X' or 'O' (winning player)
            }
        }

        if (!board.includes("")) {
            gameOver = true;  // ✅ Prevent further moves if it's a tie
            return "Tie";
        }

        return null;
    };

    return {
        board, placeMark, checkWinner
    }
})();



// Player is a factory function, meaning it returns a new object each time it's called.
const Player = (name, mark) => {
    return { name, mark } // returns a new object
}

// const Game = (() => {
//     let player1;
//     let player2;
//     let currentPlayer;
//     let gameOver = false;

//     const startGame = (name1, name2) => {
//         player1 = Player(name1, "X");
//         player2 = Player(name2, "O");
//         currentPlayer = player1;
//         gameOver = false;

//         Gameboard.board.fill(""); // reset the game board

//         renderBoard();  // ✅ Ensure the UI updates
//         statusTextElement.textContent = `${player1.name}'s turn.`;

//         console.log("Game Started");
//     }

//     const playTurn = (index) => {
//         if (gameOver) {
//             statusTextElement.textContent = ("Game is over, Please restart");
//             return;
//         }

//         if (Gameboard.placeMark(index, currentPlayer.mark)) {
//             renderBoard();
//             const winner = Gameboard.checkWinner();
//             if (winner) {
//                 gameOver = true;
//                 if (winner === "Tie") {
//                     statusTextElement.textContent = ("It's a tie!");
//                 } else {
//                     statusTextElement.textContent = (`${currentPlayer.name} wins!`);
//                 }
//             } else {
//                 currentPlayer = currentPlayer === player1 ? player2 : player1; // Switch player
//                 statusTextElement.textContent = (`${currentPlayer.name}'s turn.`);
//             }
//         } else {
//             statusTextElement.textContent = ("Cell is already taken! Try again");
//         }
//     }
//     return { startGame, playTurn }
// })();

const Game = (() => {
    let player1;
    let player2;
    let currentPlayer;
    let gameOver = false;
    let isAgainstComputer = false; // Track if playing vs AI

    const startGame = (name1, name2, againstAI = false) => {
        player1 = Player(name1, "X");
        player2 = Player(name2, "O");
        currentPlayer = player1;
        gameOver = false;
        isAgainstComputer = againstAI; // Set AI mode
        Gameboard.board.fill("");
        renderBoard();
        statusTextElement.textContent = `${player1.name}'s turn.`;
    };

    const playTurn = (index) => {
        if (gameOver) {
            statusTextElement.textContent = "Game is over, Please restart";
            return;
        }

        if (Gameboard.placeMark(index, currentPlayer.mark)) {
            renderBoard();
            const winner = Gameboard.checkWinner();

            if (winner) {
                gameOver = true;
                statusTextElement.textContent = winner === "Tie" ? "It's a tie!" : `${currentPlayer.name} wins!`;
            } else {
                currentPlayer = currentPlayer === player1 ? player2 : player1;
                statusTextElement.textContent = `${currentPlayer.name}'s turn.`;

                if (isAgainstComputer && currentPlayer === player2) {
                    setTimeout(computerMove, 500); // Delay AI move for realism
                }
            }
        } else {
            statusTextElement.textContent = "Cell is already taken! Try again";
        }
    };

    const computerMove = () => {
        let availableSpots = Gameboard.board.map((cell, index) => (cell === "" ? index : null)).filter(index => index !== null);

        if (availableSpots.length === 0) return;

        let randomIndex = availableSpots[Math.floor(Math.random() * availableSpots.length)];
        playTurn(randomIndex);
    };

    return { startGame, playTurn };
})();


