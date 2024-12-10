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



/**********************/
/* muziek op checkbox */
/**********************/
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


