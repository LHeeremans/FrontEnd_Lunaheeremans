// JavaScript Document
console.log("hi");



const menuButton = document.querySelector("nav button");
const deNav = document.querySelector("nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}
