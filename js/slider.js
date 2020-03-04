// Welcome to my slider!!

const container = document.querySelector('.slider__container');
const prevButton = container.querySelector('.slider__prevButton');
const nextButton = container.querySelector('.slider__nextButton');
let counter = 0;

function handlePrevButton() {
    counter--;
    container.style.backgroundImage = `url(../slider/DJI_${counter}.jpg)`;
    if (counter < 1 ) {
        container.style.backgroundImage = 'url(../slider/DJI_7.jpg)';
        counter = 7;
    }
}

function handleNextButton() {
    counter++;
    container.style.backgroundImage = `url(../slider/DJI_${counter}.jpg)`;
    if (counter > 7 ) {
        container.style.backgroundImage = 'url(../slider/DJI_1.jpg)';
        counter = 1;
    }
}

prevButton.addEventListener('click', handlePrevButton);
nextButton.addEventListener('click', handleNextButton);

