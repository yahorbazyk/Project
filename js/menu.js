const menuItems = Array.from(document.querySelectorAll('.header__menu .menu__link'));
const marker = document.querySelector('.menu__marker');

const updateMarkerPosition = (element) => {
  const image = element.querySelector('img');

  const elementWidth = !!image ? image.offsetWidth : element.offsetWidth;

  marker.style.left = element.offsetLeft + elementWidth / 2 - marker.offsetWidth / 2 + 'px';
  marker.style.width = '5%';
};

const handleMenuItemMouseOver = (menuItem) => {
  if (menuItem) {
    updateMarkerPosition(menuItem);
  }
};

const handleMenuItemMouseOut = (menuItem) => {
  if (menuItem) {
    updateMarkerPosition(menuItem);
  }
};

const handleMenuEffects = (currentPage) => {
  let currentItem;

  menuItems.forEach((menuItem) => {
    const menuItemHref = menuItem.getAttribute('href');
    const lastPartOfCurrentPage = currentPage.substring(1).split('/').pop();

    if (menuItemHref === lastPartOfCurrentPage || (currentPage === '/' && menuItemHref === 'index.html')) {
      currentItem = menuItem;
      updateMarkerPosition(menuItem);
    }

    menuItem.addEventListener('mouseover', () => handleMenuItemMouseOver(menuItem));
    menuItem.addEventListener('mouseout', () => handleMenuItemMouseOut(currentItem));
  });
};

export default {
  handleMenuEffects,
};
