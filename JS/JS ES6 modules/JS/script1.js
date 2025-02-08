// const name = (() => {
//     const firstName = "Aditya";
//     const greetings = "Hello Aditya!" // private scope
//     return firstName;
// })(); // IIFE



// NAMED EXPORT & IMPORT

// export const firstName = "Aditya";
// export const greetings = "Hello Aditya!"

// on a separate line
// const firstName = "Aditya";
// const greetings = "Hello Aditya!"
// export { firstName, greetings }; // Named export



// DEFAULT EXPORT
// Default Export - a file can only default export a single thing, Something exported this way does not have a name attached to it
// To export something from a file as a default export, we can also do it inline by prepending export default to the appropriate declaration, or we can export it at the end of the file, this time without any curly braces.

// export default "Hello Aditya!"

// on a separate line
// const greetings = "Hello Aditya!"
// export default greetings // default export does not need curly braces to export


const firstName = "Aditya";
const lastName = "Anand";
export { firstName, lastName };
export default "Hello Aditya!"