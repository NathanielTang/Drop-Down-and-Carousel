const gallery = document.getElementById('gallery')
const dropdown = document.querySelector('.dropdownul')

gallery.addEventListener('click', () => dropdown.classList.add('active'))

dropdown.addEventListener('click', () => dropdown.classList.remove('active'))

const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const frame = document.querySelector('.frame')

const frameWidth= frame.getBoundingClientRect().width;


prev.addEventListener("click", moveToNext)
next.addEventListener("click", moveToPrev)

let amountToMove = 0;

function moveCarousel(direction) {
    
    if (direction === "next") {
        amountToMove += frameWidth;
    }
    if (direction === "prev") {
        amountToMove -= frameWidth;
    }

    carousel.style.transform = `translateX(${amountToMove}px)`;
}

function changeCurrentSlide(direction) {
    const currentSlide = document.querySelector('current-slide')
    console.log(currentSlide)
    const nextSlide = currentSlide.nextElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    console.log(nextSlide)
    console.log(prevSlide)

    if (direction === 'next') {
        currentSlide.classList.remove('current-slide');
        nextSlide.classList.add('current-slide');
    }
    if (direction === 'prev') {
        currentSlide.classList.remove('current-slide');
        prevSlide.classList.add('current-slide');
    }

}

function moveToNext() {
    moveCarousel("next")
    changeCurrentSlide("next")
}

function moveToPrev() {
    moveCarousel("prev")
    changeCurrentSlide("prev")
}
