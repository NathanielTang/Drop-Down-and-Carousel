const gallery = document.getElementById('gallery')
const dropdown = document.querySelector('.dropdownul')

gallery.addEventListener('click', () => dropdown.classList.add('active'))

dropdown.addEventListener('click', () => dropdown.classList.remove('active'))

const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const frame = document.querySelector('.frame')

// const frameWidth= frame.getBoundingClientRect().width;
const frameWidth = 900;
console.log(frameWidth)

prev.addEventListener("click", moveToPrev)
next.addEventListener("click", moveToNext)

let amountToMove = 0;

function moveCarousel(direction) {
    
    if (direction === "next") {
        amountToMove -= frameWidth;
    }
    if (direction === "prev") {
        amountToMove += frameWidth;
    }

    carousel.style.transform = `translateX(${amountToMove}px)`;
}

function changeCurrentSlide(direction) {
    const currentSlide = document.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling;
    const prevSlide = currentSlide.previousElementSibling;
    

    if (direction === 'next') {
        if (nextSlide == null) return;
        
        currentSlide.classList.remove('current-slide');
        nextSlide.classList.add('current-slide');
        moveCarousel("next")
    }
    if (direction === 'prev') {
        if (prevSlide == null) return;
        
        currentSlide.classList.remove('current-slide');
        prevSlide.classList.add('current-slide');
        moveCarousel("prev")
    }

}

function moveToNext() {
   
    changeCurrentSlide("next")
}

function moveToPrev() {
    
    changeCurrentSlide("prev")
}
