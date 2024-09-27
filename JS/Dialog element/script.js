// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// // console.log(dialog, showButton, closeButton);

// showButton.addEventListener("click", () => {
//     dialog.showModal();
// });

// closeButton.addEventListener("click", () => {
//     dialog.close();
// });

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

console.log(showButton, favDialog, outputBox, selectEl, confirmBtn);

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
    favDialog.showModal();
});

// "Cancel" button closes the dialog without submitting because of [formmethod = "dialog"], triggaring a close event.
favDialog.addEventListener("close", (e) => {
    outputBox.value = favDialog.returnValue === "default" ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close event".
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // we don't want to submit this fake form
    favDialog.close(selectEl.value); // Have to send the select box value here.
});