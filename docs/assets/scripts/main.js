/* Navbar script */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
