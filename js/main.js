// -----=======WORKS SECTION GALLERIES =======-----


const displayScreen = document.querySelector('.works__samples');
const worksList = document.querySelectorAll('.works__list-item');
const dataBase = [
    ['../works/1/s/1.jpg', '../works/1/s/2.jpg', '../works/1/s/3.jpg', '../works/1/s/4.jpg', '../works/1/s/5.jpg', '../works/1/s/6.jpg', '../works/1/s/7.jpg'],
    ['../works/2/s/1.jpg', '../works/2/s/2.jpg', '../works/2/s/3.jpg', '../works/2/s/4.jpg', '../works/2/s/5.jpg', '../works/2/s/6.jpg', '../works/2/s/7.jpg'], 
    ['../works/3/s/1.jpg', '../works/3/s/2.jpg', '../works/3/s/3.jpg', '../works/3/s/4.jpg', '../works/3/s/5.jpg', '../works/3/s/6.jpg', '../works/3/s/7.jpg'],
    ['../works/4/s/1.jpg', '../works/4/s/2.jpg', '../works/4/s/3.jpg', '../works/4/s/4.jpg', '../works/4/s/5.jpg', '../works/4/s/6.jpg', '../works/4/s/7.jpg'],
    ['../works/5/s/1.jpg', '../works/5/s/2.jpg', '../works/5/s/3.jpg', '../works/5/s/4.jpg', '../works/5/s/5.jpg', '../works/5/s/6.jpg', '../works/5/s/7.jpg'],
    ['../works/6/s/1.jpg', '../works/6/s/2.jpg', '../works/6/s/3.jpg', '../works/6/s/4.jpg', '../works/6/s/5.jpg', '../works/6/s/6.jpg', '../works/6/s/7.jpg'],
];

var tl = gsap.timeline();


function displayGallery(e) {
    const {id} = e.currentTarget.dataset
    tl.fromTo('.works__samples', { x: '50%', y: '50%', height: 0, width: 0, transformOrigin: '50% 50%'}, 
                                { x:20, y: 20, height: '70vh', width: '100%', duration: 3, ease: 'slow' });

    function close() {
        displayScreen.classList.remove('open');
        displayScreen.style = 'none';
        displayScreen.innerHTML = '';
    }

    function populateScreen() {
        close();
        displayScreen.classList.add('open');    
        dataBase.forEach((entry, index) => { 
            if (parseInt(id) === index) {
                entry.forEach(url => {
                    const newPicture = document.createElement('img');
                    newPicture.setAttribute('src', url);
                    newPicture.setAttribute('tabindex', '0')
                    newPicture.classList.add('works__samples-img');
                    displayScreen.appendChild(newPicture);
                })
            }
        })
        tl.to('.works__samples', { duration: 1.5 ,opacity: 1, backgroundImage: `linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #FFF,#FFF)`});
        tl.fromTo('.works__samples-img', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25}, "-=1");
    }

    if (e.currentTarget.tagName === 'LI') {
        populateScreen();    
    }

    //

    const pictures = Array.from(displayScreen.querySelectorAll('.works__samples-img'));
    const modal = document.querySelector('.works__modal');
    const prevButton = modal.querySelector('.works__bigpicture-prev');
    const nextButton = modal.querySelector('.works__bigpicture-next');
    let currentPicture;


    function openModal(e) {
        const photo = e.currentTarget;
        modal.classList.add('works__modal-open');
        displayPhoto(photo);
        window.addEventListener('keyup', handleKeyUp);
        prevButton.addEventListener('click', prevPicture);
        nextButton.addEventListener('click', nextPicture);
    }
  
    function closeModal() {
        modal.classList.remove('works__modal-open');
    }

    function displayPhoto(img) {
        currentPicture = img
        const regex = new RegExp('\/s');
        const picture = modal.querySelector('.works__bigpicture-pic');
        const biggerPicture = img.src.replace(regex, '/m')
        picture.src = biggerPicture;       
    }
    
    function prevPicture() {
        displayPhoto(currentPicture.previousElementSibling || displayScreen.lastElementChild)
    }

    function nextPicture() {
        displayPhoto(currentPicture.nextElementSibling || displayScreen.firstElementChild)
    }
    
    function handleKeyUp(e) {
        e.key === 'Enter' ? displayPhoto() : null;
        e.key === 'Escape' ? closeModal() : null;
        e.key === 'ArrowLeft' ? prevPicture() : null;
        e.key === 'ArrowRight' ? nextPicture() : null;
    }
    
    function clickOutside(e) {
        if (e.target === e.currentTarget || e.key === 'Escape') {
            modal.classList.remove('works__modal-open');
        }
    }

    modal.addEventListener('click', clickOutside);
    pictures.forEach(pic => {pic.addEventListener('click', openModal)});
    pictures.forEach(pic => {pic.addEventListener('keyup', (e) => {
        e.key === 'Enter' ? openModal(e) : null;
    })});
}


worksList.forEach(item => {
    item.addEventListener('click', displayGallery);
})
worksList.forEach(item => {
    item.addEventListener('keyup', (e) => {
        if (e.currentTarget === item && e.key === 'Enter') {
            displayGallery(e)
        }
    });
})

