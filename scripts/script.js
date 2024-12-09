// JavaScript Document
console.log("hi");


/* dit is lescode samen met Sanne: https://codepen.io/LHeeremans/pen/BaXgvMK?editors=0110 */
const menuButton = document.querySelector("nav button");
const deNav = document.querySelector("nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}

/**************/
/* Zoek openen*/
/**************/
const zoekKnop = document.querySelector("nav > button:nth-of-type(2)");
const nav = document.querySelector("nav");


zoekKnop.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    nav.setAttribute("data-open", !isOpen);
});

/****************************/
/* transition van de pagina */
/****************************/

document.addEventListener("DOMContentLoaded",  () => {
  document.body.classList.add("loaded");

  document.body.addEventListener("transitionend", () => {
    document.body.className = "";
  });

});

/*************************/
/* film foto's op timing */
/*************************/





