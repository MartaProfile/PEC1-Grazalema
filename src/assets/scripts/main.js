/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import 'swiper/swiper-bundle.css';
import '../styles/main.scss';

import Swiper from 'swiper';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


// SWIPER

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
      loop: true,

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

  });

   const nextButton = document.querySelector('.swiper-button-next');
   const prevButton = document.querySelector('.swiper-button-prev');

   nextButton.addEventListener('click', function () {
       swiper.slideNext();
   });

   prevButton.addEventListener('click', function () {
       swiper.slidePrev();
   });
});



// NAVEGADOR

const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');


// Evento de Click para el botón "Menú"

navToggle.addEventListener('click', () => {
  navList.classList.toggle('is-active');
});


// Cierra el "Menú" cuando el usuario hace click en un enlace

navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-active');
    });
  });



// MENÚ ID#

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = document.querySelector("header").offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top; 
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
