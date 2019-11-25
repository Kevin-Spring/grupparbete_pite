const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //Animation vid klick
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      //Länkar med animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.3}s`;
        }
      });
      //Burger nav animation vid klick (mobila versionen)
      burger.classList.toggle("toggle");
    });
  };
  
  navSlide();