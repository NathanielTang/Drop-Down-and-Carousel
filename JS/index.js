const gallery = document.getElementById('gallery')
const dropdown = document.querySelector('.dropdownul')

gallery.addEventListener('click', () => dropdown.classList.add('active'))

dropdown.addEventListener('click', () => dropdown.classList.remove('active'))