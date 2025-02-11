import "./styles.css";
import leafImg from "./halie-west-25xggax4bSA-unsplash.jpg"
import { greeting } from "./greeting.js";

console.log(greeting)

const image = document.createElement("img");
image.src = leafImg;

document.body.appendChild(image);