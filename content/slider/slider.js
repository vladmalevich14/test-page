fetch('content/slider/slider.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('feedbackBlock').innerHTML = html
        sliderFunc()
    });

function sliderFunc() {
    const slider = document.querySelector('.slider__container');
    const prevButton = document.querySelector('.slider__prevButton');
    const nextButton = document.querySelector('.slider__nextButton');
    const slides = Array.from(slider.querySelectorAll('div.slider__container > div'));
    const slideCount = slides.length;
    let slideIndex = 0;

    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    function showPreviousSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlider();
    }

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = 'flex';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    updateSlider();
}