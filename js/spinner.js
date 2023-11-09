const body = document.body;
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.style.display = 'none';
    body.classList.remove('no-scroll');
  }, 800);
});

const showSpinner = () => {
  if (spinner && !body.classList.contains('no-scroll')) {
    spinner.style.display = 'block';
    body.classList.add('no-scroll');
  }
};

const hideSpinner = () => {
  if (spinner && body.classList.contains('no-scroll')) {
    spinner.style.display = 'none';
    body.classList.remove('no-scroll');
  }
};

export default {
  showSpinner,
  hideSpinner,
};
