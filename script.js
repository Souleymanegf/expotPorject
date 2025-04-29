// Menu hamburger + liens actifs
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Carrousel glissant

const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentSlideIndex = 0;

// Afficher la slide active
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    thumbnails[i].classList.toggle('active', i === index);
  });
}

// Slide suivant
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

// Fonction appelée sur clic miniature
function currentSlide(index) {
  currentSlideIndex = index;
  showSlide(index);
}

// Défilement automatique toutes les 5 secondes
setInterval(nextSlide, 5000);

// Initialiser
showSlide(currentSlideIndex);
// Animation fade-in au scroll
const fadeElements = document.querySelectorAll('.fade-in');

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
