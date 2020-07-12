const hamburger = document.querySelector('.header__hamburger');
const leftButton = document.querySelector('.call2a-1');
const rightButton = document.querySelector('.call2a-2');

function handleHamburger(e) {
  if (e.target === hamburger) {
    hamburger.classList.toggle('active');
    leftButton.classList.toggle('animate-left');
    rightButton.classList.toggle('animate-right');
  }
}

hamburger.addEventListener('click', handleHamburger);
