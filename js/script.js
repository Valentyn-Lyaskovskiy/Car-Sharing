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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1026: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1220: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// const swiperEl = document.querySelector("swiper-wrapper");
// Object.assign(swiperEl, {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     clickable: true,
//   },
//   breakpoints: {
//     1027: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1026: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//   },
// });
// swiperEl.initialize();

const burger = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
burger.addEventListener("click", function () {
  menu.classList.toggle("menu__list_active");
});