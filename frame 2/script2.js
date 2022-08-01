// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
let navBar = document.querySelector("nav");
let logo = document.querySelector(".logo");
window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    navBar.style.padding = "30px 10px";
    logo.style.fontSize = "25px";
  } else {
    navBar.style.padding = "80px 10px";
    logo.style.fontSize = "35px";
  }
}