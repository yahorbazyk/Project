'use strict';

import spinner from './spinner.js';
import sliders from './sliders.js';
import menu from './menu.js';

const currentPage = window.location.pathname;
const body = document.body;
let screenWidth = 1920;

menu.handleMenuEffects(currentPage);

const header = document.querySelector('header');
const headerMenuButton = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header-menu-list');
const servicesLinks = document.querySelectorAll('.header__menu .link-sevices');

headerMenuButton.addEventListener('click', () => {
  body.classList.toggle('no-scroll');

  header.classList.toggle('hide');
  headerMenuButton.classList.toggle('active');
  headerMenu.classList.toggle('active');

  setTimeout(() => {
    headerMenu.classList.toggle('fade');
  }, 100);
});

const setHeight = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

setHeight();

servicesLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
      body.classList.remove('no-scroll');
      header.classList.toggle('hide');
      headerMenuButton.classList.remove('active');
      headerMenu.classList.remove('active');
      headerMenu.classList.remove('fade');
    }
  });
});

const updateMarkerPosition = () => {
  const markerSelectors = [
    '.usa',
    '.canada',
    '.europe',
    '.africa',
    '.egypt',
    '.belarus',
    '.turkey',
    '.armenia',
    '.azerbaijan',
    '.uae',
    '.iran',
    '.turkmenistan',
    '.kazakhstan',
    '.uzbekistan',
    '.kyrgyzstan',
    '.india',
    '.russia',
    '.china',
    '.japan',
  ];
  const customMapWidth = document.querySelector('.page__directions')?.clientWidth;

  if (customMapWidth) {
    markerSelectors.forEach((selector) => {
      const marker = document.querySelector(`.country-marker${selector}`);

      if (marker) {
        const markerComputedStyle = window.getComputedStyle(marker);
        const markerLeftValue = parseInt(markerComputedStyle.getPropertyValue('left').replace('px', ''), 10);

        marker.style.left = `${markerLeftValue - (screenWidth - customMapWidth) / 2}px`;
      }
    });

    screenWidth = customMapWidth;
  }
};

updateMarkerPosition();

window.addEventListener('resize', () => {
  if (
    window.innerWidth > 899.98 &&
    headerMenu.classList.contains('active') &&
    headerMenuButton.classList.contains('active') &&
    document.body.classList.contains('no-scroll')
  ) {
    headerMenu.classList.remove('active');
    headerMenuButton.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
  menu.handleMenuEffects(currentPage);
});

switch (currentPage.substring(1).split('/').pop().replace('.html', '')) {
  case 'about-us':
    break;

  case 'contacts':
    break;

  case 'our-fleet':
    break;

  case '404':
    break;

  default:
    sliders.initSliders();
}
