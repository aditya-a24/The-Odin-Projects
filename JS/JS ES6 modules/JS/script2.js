// const lastName = "Anand";
// console.log(name, lastName);


// NAMED IMPORT
// import { firstName, greetings } from "./script1.js"; // Named import

// console.log(firstName);
// console.log(greetings);



// DEFAULT IMPORT
// we’re importing something that was default exported, we can name it whatever we want, When default importing, we don’t use curly braces
// import helloAditya from "./script1.js"

// console.log(helloAditya);


import greeting, { firstName, lastName } from "./script1.js";

console.log(firstName, lastName);
console.log(greeting);
