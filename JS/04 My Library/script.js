const myLibrary = [];

function Book(title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    console.log(title, author, pages, readYet);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(book);
    display();
}

// console.log(this.title, this.author, this.pages, this.readYet);

// DISPLAY BOOKS

function display(title, author, pages, readYet) {
    const displayBook = document.querySelector("#displayBook");
    displayBook.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
        <h1>Book Title: ${book.title}</h1>
        <p>Book Author: ${book.author}</p>
        <p>Book Pages: ${book.pages}</p>
        <p>Read Yet: ${book.readYet ? "Yes" : "No"}
        <div>
        <button class = "remove-book" data-index="${index}">Remove</button>
        <button class = "toggle-read" data-index="${index}">Toogle Read</button>
        </div>
        `;
        displayBook.appendChild(card);
    });

    // add event listeners to buttons
    document.querySelectorAll('.remove-book').forEach(button => {
        button.addEventListener('click', removeBook);
    });

    document.querySelectorAll('.toggle-read').forEach(button => {
        button.addEventListener('click', toggleReadStatus);
    });

    // console.log(displayBook);
    // console.log(title, author, pages, readYet);
}



//DIALOG

const dialog = document.querySelector("dialog");
const showDialog = document.querySelector("#showDialog");
const addBook = document.querySelector("#addBook");

// DIALOG SHOW

showDialog.addEventListener("click", () => {
    dialog.showModal();
})

addBook.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readYet = document.querySelector("#readYet").checked;

    // console.log("Form Submitted:", title, author, pages, readYet);


    if (title && author && pages) {
        const newBook = new Book(title, author, pages, readYet);
        console.log("New Book : ", newBook);
        addBookToLibrary(newBook);
    }

    // Reset the form
    document.querySelector("form").reset();

    // Check if library is empty and show message
    checkEmptyLibrary();
})

function checkEmptyLibrary() {
    const displayBook = document.querySelector("#displayBook");
    if (myLibrary.length === 0) {
        displayBook.innerHTML = `<p class
        ="card">No Book Added</p>`;
    }
}


function removeBook(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    display();  // Update display
}

Book.prototype.toggleRead = function () {
    this.readYet = !this.readYet;
};

function toggleReadStatus(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary[index].toggleRead();
    display();  // Update display
}