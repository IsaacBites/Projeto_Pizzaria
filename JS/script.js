const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;
const slideWidth = 100;

document.querySelector('.next-button').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    transitionToSlide(currentSlideIndex);
});

document.querySelector('.prev-button').addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    transitionToSlide(currentSlideIndex);
});

function transitionToSlide(slideIndex) {
    const offset = -slideIndex * slideWidth;
    slides.forEach((slide, index) => {
        slide.style.transition = 'transform 0.5s ease';
        slide.style.transform = `translateX(${offset}%)`;
    });
}

transitionToSlide(currentSlideIndex);



