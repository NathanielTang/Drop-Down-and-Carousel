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


//change cats to dogs using gallery dropdown buttons

const cat = document.getElementById('dropdown-cat')
const dog = document.getElementById('dropdown-dog')
const xdd = document.getElementById('dropdown-xdd')

cat.addEventListener('click', changeToCat)
dog.addEventListener('click', changeToDog)
xdd.addEventListener('click', changeToXdd)

function changeToCat() {
    changeGallery('cat')
    console.log('i am cat')
}

function changeToDog() {
    changeGallery('dog')
    console.log('i am doge')
}

function changeToXdd() {
    changeGallery('xdd')
    console.log('xdders')
}

const changeGallery = (animal) => {
    const image1 = document.getElementById('image-1');
    const image2 = document.getElementById('image-2');
    const image3 = document.getElementById('image-3');
    console.log(animal)

    if (animal === 'cat') {
        image1.src="./Images/Cat1.jpg";
        image2.src="./Images/Cat2.jpg";
        image3.src="./Images/Cat3.jpg";
        console.log('kitty')
        return   
    }
    if (animal === 'dog') {
        image1.src="./Images/Dog1.jpg";
        image2.src="./Images/Dog2.jpg";
        image3.src="./Images/Dog3.jpg";
        console.log('doggy')
        return    
    }
    if (animal === 'xdd') {
        image1.src="./Images/xdd1.png";
        image2.src="./Images/xdd2.webp";
        image3.src="./Images/xdd3.jpg";
        console.log('xddddddddddd')
        return    
    }
}
