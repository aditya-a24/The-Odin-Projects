const arr = [1, 2, 3, 4, 5];
// let total;
// let currentItem;

// const mappedArr = arr.map(mappedArray);
// console.log(mappedArr); // [2, 3, 4, 5, 6]

// const filteredArr = arr.filter(filteredArray);
// console.log(filteredArr); // [1, 3, 5]

// const reducedArr = arr.reduce(reducedArray, 1);
// console.log(reducedArr); // 120

// function mappedArray(num) {
//     // console.log(num);
//     return (num += 1); // [2, 3, 4, 5, 6]
//     // return num % 2 !== 0;
// }

// The filter method expects the callback to return either true or false. If it returns true, the value is included in the output. Otherwise, it isn’t.
// function filteredArray(num) {
//     // console.log(num);
//     return num % 2 !== 0; // [1, 3, 5]
//     // return (num += 1);
// }

// function reducedArray(total, currentItem) {
//     console.log(total, currentItem); // 1 1, 1 2, 2 3, 6 4, 24 5
//     return total * currentItem; // 120 
// }



const evenNo = arr.filter(getEvenNo);
console.log(evenNo);

const tripleEvens = evenNo.map(getTripledEvens)
console.log(tripleEvens);

const sumOfTripledEvens = tripleEvens.reduce(getSumOfTripledEvens, 0);
console.log("Sum of Tripled Evens is:", sumOfTripledEvens);



function getEvenNo(num) {
    return num % 2 === 0;
}

function getTripledEvens(num) {
    return num * 3;
}

function getSumOfTripledEvens(total, currentItem) {
    return total + currentItem;
}

