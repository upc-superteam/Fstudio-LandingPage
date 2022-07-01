/* Navbar script */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/* Slider script */
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

let images = [];
let index = 0;

images[0] = 'assets/images/step-login.png';
images[1] = 'assets/images/step-search.png';
images[2] = 'assets/images/step-reservation.png';

btnLeft.addEventListener('click', () => {
    changeImage(-1);
})

btnRight.addEventListener('click', () => {
    changeImage(1);
})

function changeImage (dir) {
    document.querySelectorAll('.circle')[index].style = 'color: #C4C4C4';
    document.querySelectorAll('.step-text')[index].style = 'display: none';
    index = index + dir;

    if (index < 0) {
        index = 2;
    } else if (index > 2) {
        index = 0;
    }

    document.querySelector('#slider-image').src = images[index];
    document.querySelectorAll('.circle')[index].style = 'color: #CB3234';
    document.querySelectorAll('.step-text')[index].style = 'display: block';
}

/* Switch */
const check = document.querySelector('.check');
check.addEventListener('click', () => {
    let id = check.checked;
    console.log(id);
    if (id == true) {
        location.href = 'en/index.html';
    } else {
        location.href = '../index.html';
    }
    check.checked = id;
});
