"use strict";
const swiper = new Swiper(".heading-top__right", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".swiper__reviews", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
