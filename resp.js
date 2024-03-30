burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlisat = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");



burger.addEventlistener("click",()=>{
    rightNav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp");
    
})

