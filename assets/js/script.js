'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


  const track = document.querySelector('.testimonial-track');
  const prevButton = document.querySelector('.prev-slide');
  const nextButton = document.querySelector('.next-slide');
  
  let currentIndex = 0;
  const slideWidth = document.querySelector('.testimonial-card').clientWidth;

  // Slide to the next set of testimonials
  nextButton.addEventListener('click', () => {
    if (currentIndex < 3) { // since we have 5 items, max index is 3 to ensure the last two show
      currentIndex++;
      track.style.transform = `translateX(-${currentIndex * slideWidth * 2}px)`; // move by two slides
    }
  });

  // Slide to the previous set of testimonials
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${currentIndex * slideWidth * 2}px)`; // move by two slides
    }
  });



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);