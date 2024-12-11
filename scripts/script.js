// JavaScript Document
console.log("hihi hallo");


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

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  document.body.addEventListener("transitionend", () => {
    document.body.className = "";
  });

});

/*************************/
/* film foto's op timing */
/*************************/
const scrollElement = document.querySelector('main section:nth-of-type(5) ul');

if (scrollElement) {
  console.log("Scrollfunctionaliteit gestart...");

  const scrollInterval = 6000; /*3 seconden*/
  const scrollStep = scrollElement.offsetWidth * 1.05;  /*25% van de zichtbare breedte*/

  setInterval(() => {
    const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
    const newScrollLeft = scrollElement.scrollLeft + scrollStep;

    if (newScrollLeft >= maxScrollLeft) {
      scrollElement.scrollLeft = 0; 
    } else {
      scrollElement.scrollLeft = newScrollLeft;
    }
  }, scrollInterval);
}



/********************************/
/* video stopt als check uitzet */
/********************************/
document.addEventListener("DOMContentLoaded", function () {
  const kerstCheckbox = document.querySelector("nav label:nth-of-type(2)");
  const kerstVideo = document.querySelector("video");

  kerstCheckbox.addEventListener('change', function () {
    if (kerstCheckbox.checked) {
      kerstVideo.play();
    }
    else {
      kerstVideo.pause();
      kerstVideo.currentTime = 0;
    }
  });
});

/********/
/* laad */
/********/

document.querySelector("main section:nth-of-type(2) a").addEventListener("click", function (event) {
  event.preventDefault();

  const img = document.querySelector("main section:nth-of-type(2) img:nth-of-type(2)");
img.style.visibility = "visible";
img.style.opacity = "1";

setTimeout(function() {
  img.style.opacity = "0";
},2000);
  
});


/*******************************/
/* poging lineheight aanpassen */
/*******************************/
/*dit heb ik van chatgpt/ prompt: hoe maak ik een slider voor het aanpassen van de letter grootte? https://chatgpt.com*/

const slider = document.getElementById("fontSizeSlider");
const paragraphs = document.querySelectorAll("h1, h2, h3, p"); 

// Event listener voor de slider
slider.addEventListener("input", function() {
    const value = slider.value + "pt"; // Haal de waarde van de slider op en voeg "px" toe
    // Pas de font-size van alle geselecteerde paragrafen aan
    paragraphs.forEach(paragraph => {
        paragraph.style.fontSize = value;
    });
    sliderValue.textContent = `Lettergrootte: ${value}`; // Toon de huidige waarde van de slider in een <p>
});
