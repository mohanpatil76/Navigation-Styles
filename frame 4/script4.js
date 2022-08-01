let navBar = document.querySelector("aside");

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    navBar.style.top = window.pageYOffset + "px";

})