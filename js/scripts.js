const burger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});