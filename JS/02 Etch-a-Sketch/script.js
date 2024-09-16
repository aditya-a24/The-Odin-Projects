const container = document.querySelector("#container");
let useRandomColor = false; // to toggle between black and rgb

function createGrid(squaresPerSide) {

    //clear the container for the new grid
    container.innerHTML = '';
    const squareSize = 960 / squaresPerSide; // it will gove size of each square of grid

    // create grid of divs
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect to change color on mouse over
        square.addEventListener('mouseover', () => {
            if (useRandomColor) {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = 'black';
            }
        });

        container.appendChild(square);
    }
}

createGrid(16);


// taking user input for square on each side of the grid
function promptGridSize() {
    let userInput = parseInt(prompt("Enter the number of square per side (max 100): "));

    if (userInput > 0 && userInput <= 100) {
        createGrid(userInput);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
    console.log(userInput);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function toggleRandomColor() {
    useRandomColor = !useRandomColor;
    alert(`Random color mode is now ${useRandomColor ? "ON" : "OFF"}.`);
}

function resetGrid() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}
