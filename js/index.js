const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navBar = document.querySelector('nav')

  burger.addEventListener("click", () => {
    //   TOGGLE NAV
    nav.classList.toggle("nav-active");

    // ANIMATE LINK
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
    //   BURGER ANIMATION
    burger.classList.toggle('toggle')
  });

window.addEventListener('scroll', fixNav)
function fixNav(){
if(window.scrollY > navBar.offsetHeight + 150){
  navBar.classList.add('active-nav')
}
else{
  navBar.classList.remove('active-nav')
}
}

};
navSlide();
             
