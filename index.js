let menu = document.querySelector(".men-btn");
let list = document.querySelector(".list");
let navbar = document.querySelector("nav");
let hom = document.querySelector(".back")
var scrollTop;
var element = document.querySelector(".fooder")
var lash = element.offsetTop;
let wis = window.innerWidth;
let sect = document.querySelectorAll(".section");
let links  = document.querySelectorAll("nav ul li a");


// active nav links
window.onscroll = () => {
  sect.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop-100;
  let height = sec.offsetHeight;
  let id = sec.getAttribute("id");
  if(top >= offset && top < offset + height){
    links.forEach(link => {
      link.classList.remove("active");
      document.querySelector('nav ul li a[href*=' + id + ']').classList.add("active");
    })
  }
  });
};



// javascript for min-width screen
if(wis<900){
  list.style.display = "none";
  AOS.init({
    disable: true
  })

   function gone(){
    list.style.display = "none";
    menu.classList.toggle("active");
   }
   Array.from(links).forEach(function(link) {
    link.addEventListener('click', gone);
  });

}
 else if(wis>900){
  list.style.display = "flex";
  AOS.init();
}



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


// back to top button display and 
window.addEventListener("scroll", () => {
  back = document.querySelector(".backtotop");
  if((window.scrollY)>1000){
    back.style.display = "block";
    }
  else{
    back.style.display = "none";
  }
}
)

//count the visitors of web

const count = document.getElementById("count");
updatecount();
function updatecount(){
  fetch('https://api.countapi.xyz/update/alex/alextech/?amount=1')
  .then(res => res.json())
  .then(res => {
    count.innerHTML = res.value;
  });
}