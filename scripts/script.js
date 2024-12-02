// JavaScript Document
console.log("hi");



const menuButton = document.querySelector("nav button");
const deNav = document.querySelector("nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}
// Selecteer de zoekknop en het nav-element
const zoekKnop = document.querySelector("nav > button:nth-of-type(2)");
const nav = document.querySelector("nav");


zoekKnop.addEventListener("click", () => {
    // Toggle de 'data-open' toestand
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", !isOpen);
});

