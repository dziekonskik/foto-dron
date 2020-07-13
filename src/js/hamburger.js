const hamburger = document.querySelector('.header__hamburger');
const leftButton = document.querySelector('.call2a-1');
const rightButton = document.querySelector('.call2a-2');
const ul = document.querySelector('.header__nav');

function handleHamburger(e) {
  if (e.target === hamburger) {
    hamburger.classList.toggle('active');
    leftButton.classList.toggle('animate-left');
    rightButton.classList.toggle('animate-right');
    ul.classList.toggle('show-menu');
  }
}

hamburger.addEventListener('click', handleHamburger);
