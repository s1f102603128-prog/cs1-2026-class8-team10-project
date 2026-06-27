const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('#global-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('is-active');

    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
});
