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
const totalCards = document.querySelectorAll('.testimonial-card').length; // Count all cards
const slideWidth = document.querySelector('.testimonial-card').clientWidth;

// Slide to the next set of testimonials
nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards - 2) { // Allow moving until the last two cards show
        currentIndex += 2; // Move by two slides
    } else if (currentIndex === totalCards - 2) { // If at second to last card, move to last card
        currentIndex += 1; // Move to the last card
    }
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move by the width of cards
});

// Slide to the previous set of testimonials
prevButton.addEventListener('click', () => {
    if (currentIndex > 1) { // If more than two cards are shown, move back by two slides
        currentIndex -= 2; 
    } else if (currentIndex === 1) { // If at the second card, move back to first two
        currentIndex -= 1; 
    }
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move by the width of cards
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