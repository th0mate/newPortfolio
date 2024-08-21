let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlidePosition() {
    const carousel = document.querySelector('.slides');
    carousel.style.transform = `translateX(-${index * 100}%)`;
    console.log(index);
}

function goLeft() {
    index = (index > 0) ? index - 1 : totalSlides - 1;
    updateSlidePosition();
}

function goRight() {
    index = (index < totalSlides - 1) ? index + 1 : 0;
    updateSlidePosition();
}

function animerCarousel() {
    document.querySelector('.boutonCarousel.gauche').addEventListener('click', goLeft);
    document.querySelector('.boutonCarousel.droite').addEventListener('click', goRight);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé');
});