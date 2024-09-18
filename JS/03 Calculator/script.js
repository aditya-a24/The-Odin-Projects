let no1;
let no2;
let operator;
let displayValue = "0";

let add = (no1, no2) => {
    return no1 + no2;
}

let subtract = (no1, no2) => {
    return no1 - no2;
}

let multiply = (no1, no2) => {
    return no1 * no2;
}

let divide = (no1, no2) => {
    if (no2 === 0) {
        return "Error: Cannot divide by 0!";
    }
    return no1 / no2;
}

// console.log(add(2, 4));
// console.log(subtract(2, 4));
// console.log(multiply(2, 4));
// console.log(divide(2, 4));
// console.log(divide(2, 0));

// const operations = {
//     "+": add,
//     "-": subtract,
//     "*": multiply,
//     "/": divide
// };

// let operate = (no1, no2, operator) => {
//     if (operations[operator]) {
//         console.log();
//         console.log(operations[operator](no1, no2));
//     } else {
//         console.log(null);
//     }
// }

let operate = (no1, no2, operator) => {
    if (operator === "+") {
        add(no1, no2);
    } else if (operator === "-") {
        subtract(no1, no2);
    } else if (operator === "*") {
        multiply(no1, no2);
    } else if (operator === "/") {
        divide(no1, no2);
    }
}

// operate(2, 4, "+");


function updateDisplay() {
    const display = document.querySelector("#display");
    display.textContent = displayValue;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        console.log(value);

        if (!isNaN(value) || value === ".") {
            handleNumber(value);
        } else if (value === "=") {
            handleEquals();
        } else if (value === "C") {
            clearCalculator();
        } else {
            handleOperator(value);
        }
        updateDisplay();
    });
});

function handleNumber(value) {
    console.log("in handleNumber function");
    if (value === "." && displayValue.includes(".")) {
        return;
    }
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
}

function handleOperator(value) {
    console.log("in handleOperator function");
    no1 = parseFloat(displayValue);
    console.log("no1 = ", no1);
    operator = value;
    console.log("operator = ", operator);
    displayValue = "0";
}

function handleEquals() {
    console.log("in handleEquals function");
    no2 = parseFloat(displayValue);
    console.log("no2 = ", no2);
    let result = operate(no1, no2, operator);
    displayValue = Math.round(result * 10000) / 10000;
    // displayValue = result.toString();
}

function clearCalculator() {
    console.log("in clearCalculator function");
    displayValue = "0";
    no1 = null;
    no2 = null;
    operator = null;
}