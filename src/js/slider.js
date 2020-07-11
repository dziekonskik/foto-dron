// -----=======WELCOME TO MY SLIDER=======-----

const container = document.querySelector('.slider__container');
const screen = container.querySelector('.slider__screen');
const prevButton = container.querySelector('.slider__prevButton');
const nextButton = container.querySelector('.slider__nextButton');
let counter = 0;

function handlePrevButton() {
  counter--;
  gsap.fromTo(
    '.slider__screen',
    { opacity: 0 },
    { opacity: 1, duration: 0.2, ease: Elastic }
  );
  screen.style.backgroundImage = `url(img/slider/DJI_${counter}.jpg)`;
  if (counter < 1) {
    screen.style.backgroundImage = 'url(img/slider/DJI_7.jpg)';
    counter = 7;
  }
}

function handleNextButton() {
  counter++;
  gsap.fromTo('.slider__screen', { opacity: 0 }, { opacity: 1, duration: 0.2 });
  screen.style.backgroundImage = `url(img/slider/DJI_${counter}.jpg)`;
  if (counter > 7) {
    screen.style.backgroundImage = 'url(img/slider/DJI_1.jpg)';
    counter = 1;
  }
}

prevButton.addEventListener('click', handlePrevButton);
nextButton.addEventListener('click', handleNextButton);
