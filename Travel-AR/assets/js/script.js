// Reloader
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", ()=> {
   preloader.classList.add("remove");
});


// add Event On Multiple Elements
const addEventOnElements = function(el,eType,callBack){
   for(let i=0, len = el.length; i < len; i++){
      el[i].addEventListener(eType, callBack);
   }
}


// Toggle Nav for Mobile
const navbar = document.querySelector("[data-navbar]"),
      navTogglers = document.querySelectorAll("[data-nav-toggler]"),
      overlay = document.querySelector("[data-overlay]");


const toggleNav = function(){
   navbar.classList.toggle("active");
   overlay.classList.toggle("active");
   document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav)

// Change Style Header When Scrolling
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
   header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})















