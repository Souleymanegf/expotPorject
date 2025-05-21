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







const swiper = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  effect: 'slide',
});
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

(function () {
  const content = document.getElementById("content");

  // Fonction pour charger le contenu via AJAX
  function chargerContenu(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        content.innerHTML = xhr.responseText;
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        content.innerHTML = "<p>Le contenu n'a pas pu être chargé.</p>";
      }
    };

    xhr.onerror = function () {
      content.innerHTML = "<p>Une erreur est survenue.</p>";
    };

    xhr.send();
  }

  // Gérer les clics sur les liens
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      chargerContenu(href);
      history.pushState({ page: href }, "", href); // gestion historique
    });
  });

  // Support du bouton retour du navigateur
  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.page) {
      chargerContenu(e.state.page);
    }
  });
})();

