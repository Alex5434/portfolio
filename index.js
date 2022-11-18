let menu = document.querySelector(".men-btn");
let list = document.querySelector(".list");
let navbar = document.querySelector("nav");
let hom = document.querySelector(".back")
var scrollTop;
var element = document.querySelector(".fooder")
var lash = element.offsetTop;
console.log(lash);

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
  console.log(scrollTop);
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


// contact email 

const sendMail = () => {
  var params = {
    from_name : document.getElementById("fromname").value,
    email_id : document.getElementById("email_id").value,
    phone : document.getElementById("phone").value,
    message : document.getElementById("message").value

  }
  emailjs.send("service_tl4yihs", "template_14tanrg", params).then(function(res){
    alert("success"+ res.status)
  })
}
