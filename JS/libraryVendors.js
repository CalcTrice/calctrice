
//Locomotive Scroll
// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 15,
});

window.onload = function () {
    Particles.init({
        selector: '.background',
        maxParticles: 200,
        color: "#ffb000",
        connectParticles: true

    });
};