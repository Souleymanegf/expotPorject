const thumbsSwiper = new Swiper(".thumbs-swiper", {
    spaceBetween: 10,
    slidesPerView: "auto",
    centeredSlides: true,  // 🔥 ICI : centrer la miniature active
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideToClickedSlide: true, // Permet de cliquer sur une miniature pour centrer
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      1024: { slidesPerView: 6 }
    }
  });
  
  const mainSwiper = new Swiper(".main-swiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    thumbs: {
      swiper: thumbsSwiper
    }
  });