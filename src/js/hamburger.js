const hamburger = document.querySelector('.header__hamburger');

function handleHamburger(e) {
  e.target === hamburger ? hamburger.classList.toggle('open') : null;
}

hamburger.addEventListener('click', handleHamburger);
