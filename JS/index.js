const gallery = document.getElementById('gallery')
const dropdown = document.querySelector('.dropdownul')

gallery.addEventListener('click', () => dropdown.classList.add('active'))

dropdown.addEventListener('click', () => dropdown.classList.remove('active'))

const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let translateX = -900;

prev.addEventListener("click", () => carousel.style.transform = `translateX(${translateX}px)`)
next.addEventListener("click", () => carousel.style.transform = "translateX(-1800px)")
