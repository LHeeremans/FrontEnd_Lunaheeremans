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

  const scrollInterval = 6000; // 3 seconden (kort voor testdoeleinden)
  const scrollStep = scrollElement.offsetWidth * 1.05; // 25% van de zichtbare breedte

  setInterval(() => {
    const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
    const newScrollLeft = scrollElement.scrollLeft + scrollStep;

    if (newScrollLeft >= maxScrollLeft) {
      scrollElement.scrollLeft = 0; // Reset scrollpositie
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

/* Dit heb ik van chatGpt/ prompt: hoe maak ik een slider om de lettergrootte aan te passen?*/
const slider = document.getElementById("fontSizeSlider");
const tekst = document.querySelectorAll("h1, h2, h3, p"); 

slider.addEventListener("input", function() {
    const value = slider.value + "pt"; 
    paragraphs.forEach(tekst => {
        paragraph.style.fontSize = value;
    });
});
