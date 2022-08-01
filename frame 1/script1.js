
let navBar = document.querySelector("nav");

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 0 ){
        navBar.setAttribute("class", "activeNavBar")
    }
    else if((window.pageYOffset == 0 )){
        navBar.classList.remove("activeNavBar")
    }
    
});