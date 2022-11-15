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
  scrollTop =window.scrollY;
  let height = home.offsetHeight;
  height-scrollTop<60?navbar.classList.add("act"):navbar.classList.remove("act");
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


// contact information



const sendMsg = (e) => {
  // e.preventDefault();
  const form = document.querySelector(".contact_form"),
  name = document.querySelector(".name"),
  email = document.querySelector(".email"),
  phone = document.querySelector(".phone"),
  msg = document.querySelector(".msg")

// Email.send({
// Host : "smtp.elasticemail.com",
// Username : "forweb5434@gmail.com",
// Password : "8C59DDD4680CB2E555117615F16F13F1F5E9",
// To : 'forweb5434@gmail.com',
// From : "guyninga@gmail.com",
// Subject : "Contact from Alextech",
// Body : msg.value
// }).then(
// message => alert(message)
// );

Email.send({
  SecureToken : "25ded337-a195-4231-b1f4-f0234dffea54",
  To : 'forweb5434@gmail.com',
  From : email.value,
  Subject : "Mail from Alextech",
  Body : msg.value
}).then(
message => alert(message)
);
}