const testimonialsCarouselSlider = () => {
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.testimonials-carousel');
    const prev = document.querySelector('.arrow-prev');
    const next = document.querySelector('.arrow-next');
    let direction = -1;

    console.log(next, prev, slider, carousel);

    prev.addEventListener('click', () => {
        if (direction === -1) {
            direction = 1;
            slider.appendChild(slider.firstElementChild);

        }
        carousel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate(20%)';

    });

    next.addEventListener('click', () => {

        if (direction === 1) {
            direction = -1;
            slider.prepend(slider.lastElementChild);
        }

        carousel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-20%)';

    });
    slider.addEventListener('transitionend', () => {
        if (direction === -1)
            slider.appendChild(slider.firstElementChild);
        else if (direction === 1)
            slider.prepend(slider.lastElementChild);

        slider.style.transition = 'none';
        slider.style.transform = 'translate(0%)';

        setTimeout(() => {

            slider.style.transition = 'all 0.3s ease-in-out';
        });
    })
}

testimonialsCarouselSlider();