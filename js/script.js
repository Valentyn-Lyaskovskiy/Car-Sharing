"use strict";
const swiper = new Swiper(".heading-top__right", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination",
  },
});