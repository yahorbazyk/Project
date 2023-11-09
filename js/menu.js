const menuItems = Array.from(document.querySelectorAll('.header__menu .menu__link'));
const marker = document.querySelector('.menu__marker');

const updateMarkerPosition = (element) => {
  marker.style.left = element.offsetLeft + element.offsetWidth / 2 - marker.offsetWidth / 2 + 'px';
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
    if (menuItem.getAttribute('href') === currentPage) {
      currentItem = menuItem;
      updateMarkerPosition(menuItem);
    } else {
    }

    menuItem.addEventListener('mouseover', () => handleMenuItemMouseOver(menuItem));
    menuItem.addEventListener('mouseout', () => handleMenuItemMouseOut(currentItem));
  });
};

export default {
  handleMenuEffects,
};
