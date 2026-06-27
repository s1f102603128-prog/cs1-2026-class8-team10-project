const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('#global-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('is-active');

    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
});

document.querySelectorAll('.has-submenu > a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = item.parentElement;
        parent.classList.toggle('open');
    });
});

let index = 0;
const slides = document.querySelectorAll('.slide')
function showNextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
setInterval(showNextSlide, 3000);