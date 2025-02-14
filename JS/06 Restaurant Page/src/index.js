import "./styles.css";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = ""; // Remove previous content
}

function loadTab(tabFuntion) {
    clearContent();
    content.appendChild(tabFuntion());
}

document.getElementById("home-btn").addEventListener("click", () => loadTab(createHome));
document.getElementById("menu-btn").addEventListener("click", () => loadTab(createMenu));
document.getElementById("about-btn").addEventListener("click", () => loadTab(createAbout));

loadTab(createHome);