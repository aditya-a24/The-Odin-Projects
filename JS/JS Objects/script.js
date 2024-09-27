function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name)
    };
}

const player1 = new Player('Aditya', 'X'); // Object Constructor, which is use by calling the function with the keyword "new"
const player2 = new Player('Anand', 'O');
player1.sayName();
player2.sayName();

// Object.getPrototypeOf(player1) === Player.prototype; // returns true
// Object.getPrototypeOf(player2) === Player.prototype; // returns true

let prototype = Player.prototype;
console.log(prototype);

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function () {
//         return bookInfo = (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);

//         // return bookInfo;
//     }
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

// console.log(theHobbit.info());