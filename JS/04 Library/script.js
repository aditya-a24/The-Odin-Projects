const myLibrary = [];

function Book(title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    // this.info = function () {
    //     return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.readYet}`);
    // }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    // console.log(myLibrary);
    displayBooks();
}


// Display Books

function displayBooks() {
    const bookList = document.querySelector("#book-list");
    bookList.innerHTML = ''; // Clear previous content
    // console.log(bookList);

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <p>Read: ${book.readYet ? 'Yes' : 'No'}</p>
    <button class = "remove-book" data-index="${index}">Remove</button>
    <button class = "toggle-read" data-index="${index}">Toogle Read</button>
    `;

        bookList.appendChild(bookCard);
    });

    // add event listeners to buttons
    document.querySelectorAll('.remove-book').forEach(button => {
        button.addEventListener('click', removeBook);
    });

    document.querySelectorAll('.toggle-read').forEach(button => {
        button.addEventListener('click', toggleReadStatus);
    });
}



// Adding New Books

const newBookBtn = document.querySelector("#new-book-btn");
const bookFormDialog = document.querySelector("#book-form");
const closeDialogBtn = document.querySelector("#close-dialog");

// newBookBtn.addEventListener("click", () => {
//     document.querySelector("#book-form").style.display = "block";
//     // console.log("Form displayed");
// });

newBookBtn.addEventListener("click", () => {
    bookFormDialog.showModal(); //show the dialog
});

closeDialogBtn.addEventListener("click", () => {
    bookFormDialog.close();
});

const bookForm = document.querySelector("#book-form form");
bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readYet = document.querySelector("#readYet").checked;

    const newBook = new Book(title, author, pages, readYet);
    addBookToLibrary(newBook);

    // Hide form and reset inputs
    // bookForm.style.display = "none";
    // console.log("Form hidden");
    bookFormDialog.close();
    this.reset();
})

function removeBook(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayBooks();  // Update display
}

Book.prototype.toggleRead = function () {
    this.readYet = !this.readYet;
};

function toggleReadStatus(event) {
    const index = event.target.getAttribute('data-index');
    myLibrary[index].toggleRead();
    displayBooks();  // Update display
}

// myLibrary.push(book1);


// console.log(myLibrary);