let fibonacci = (num) => {
    let no1 = 1;
    let no2 = 1;
    let no3;
    // console.log(no1);
    if (num === 1) {
        return no1;
    }
    for (let i = 2; i <= num; i++) {
        // console.log(no2);
        no3 = no1 + no2;
        no1 = no2;
        no2 = no3;
    }
    return no1;
}

// let getNthfibonacci = fibonacci(6);
// console.log(getNthfibonacci);

let getNo = () => {
    let getNthfibonacci = prompt("Please enter the nth number of fibonacci series you want");
    let getFibonacci = fibonacci(getNthfibonacci);
    alert(`${getFibonacci} is at the ${getNthfibonacci} on fibonacci series`);
    // console.log(getNthfibonacci);
}