const navSlide = ()=> {
  const burger = document.querySelector('.menu-icon');
  const nav = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu li')

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
  });

  // Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation){
      link.style.animation = ''
    }else{
      link.style.animation = `navLinkFade o.5s ease forwards ${index/7+1.3}s`;
    }
  });
}

const app = ()=>{
  navSlide();
}

app();
