const container = document.querySelector("#container");
const content = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const div_h1 = document.createElement("h1");
const div_p = document.createElement("p");

content.textContent = "Hey I'm red!";
h3.textContent = "I'm a blue h3!";
div_h1.textContent = "I'm in a div";
div_p.textContent = "ME TOO!";

content.style.color = "red";
h3.style.color = "blue";
div.style.cssText = "border: 1px solid black; background: pink;";
// div.setAttribute("style", "border: 1px solid black; background: pink;");
// div.setAttribute("class", "div");

div.append(div_h1, div_p);
container.appendChild(content);
container.appendChild(h3);
container.appendChild(div);
console.log(container);

// console.log(document);
// console.log(window);


const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.background = "yellow";
});

// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//     // and for each one we add a 'click' listener
//     button.addEventListener("click", () => {
//         alert(button.id);
//     });
// });