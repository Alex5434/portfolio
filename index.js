let menu = document.querySelector(".men-btn");
let list = document.querySelector(".list");
let navbar = document.querySelector("nav");
let hom = document.querySelector(".back")
var scrollTop;
let joe = hom.offsetHeight;

AOS.init();

let wis;
window.addEventListener("resize", ()=>{
  wis = window.innerWidth;
  if(wis<900){
    AOS.init({
      disable: false
    });
  }
  else{
    AOS.init({
      disable: true
    });
  }
})

// Menu toggle button
const HandleToggle = () => {
  menu.classList.toggle("active");
  if(menu.classList.contains('active')){
    list.style.display = "flex"
  }
  else{
    list.style.display = "none"
  }
}

//Navbar transparent on scroll
window.addEventListener("scroll", ()=> {
  
  scrollTop =document.body.parentNode.scrollTop;
  scrollTop>695?navbar.classList.add("act"):navbar.classList.remove("act");
})

//Running Text
var typed = new Typed(".ran",{
  strings: ["web developer", "ui/ux designer", "frontend developer"],
  typeSpeed:140,
  backSpeed:90,
  loop:true
})

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

