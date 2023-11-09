const body = document.body;
const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModaButtons = document.querySelectorAll('.close-modal-button');

const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal && !modal.classList.contains('open')) {
    body.classList.add('no-scroll');
    modal.classList.add('open');
  }
};

const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal && modal.classList.contains('open')) {
    body.classList.remove('no-scroll');
    modal.classList.remove('open');
  }
};

openModalButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    openModal(modalId);
  });
});

closeModaButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    closeModal(modalId);
  });
});
