'use strict';

import spinner from './spinner.js';
import sliders from './sliders.js';
import menu from './menu.js';

const currentPage = window.location.pathname;
const body = document.body;
let screenWidth = 1920;

menu.handleMenuEffects(currentPage.substring(1));

const headerMenuButton = document.querySelector('.header__hamburger');
const headerMenu = document.querySelector('.header-menu-list');
const servicesLinks = document.querySelectorAll('.header__menu .link-sevices');

headerMenuButton.addEventListener('click', () => {
  headerMenuButton.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// const addressBarHeight = 30; //window.innerHeight - document.documentElement.clientHeight;
const setHeight = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};
setHeight();
window.addEventListener('resize', setHeight);
// document.querySelector('.page__hero').style.height = 'calc(100vh - ' + addressBarHeight + 'px)';

servicesLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (body.classList.contains('no-scroll')) {
      body.classList.remove('no-scroll');
      headerMenuButton.classList.remove('active');
      headerMenu.classList.remove('active');
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
  const customMapWidth = document.querySelector('.page__directions').clientWidth;

  markerSelectors.forEach((selector) => {
    const marker = document.querySelector(`.country-marker${selector}`);

    if (marker) {
      const markerComputedStyle = window.getComputedStyle(marker);
      const markerLeftValue = parseInt(markerComputedStyle.getPropertyValue('left').replace('px', ''), 10);

      marker.style.left = `${markerLeftValue - (screenWidth - customMapWidth) / 2}px`;
    }
  });

  screenWidth = customMapWidth;
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
  menu.handleMenuEffects(currentPage.substring(1));
});

switch (currentPage.replace('.html', '')) {
  case '/about-us':
    break;

  case '/about-us':
    break;

  case '/contacts':
    break;

  case '/our-fleet':
    break;

  case '/services':
    break;

  default:
    sliders.initSliders();
}
