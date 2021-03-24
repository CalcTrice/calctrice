document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {



        if (card.id === card.querySelector('.inner-container').dataset.show) {
            card.querySelector('.inner-container').classList.toggle('show-content');
        }
    });
});