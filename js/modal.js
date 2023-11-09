const body = document.body;
const openModalButtons = document.querySelectorAll('.open-modal-button');
const closeModaButtons = document.querySelectorAll('.close-modal-button');

const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal && !modal.classList.contains('open')) {
    modal.classList.add('open');
    body.classList.add('no-scroll');
  }
};

const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (modal && modal.classList.contains('open')) {
    modal.classList.remove('open');
    body.classList.remove('no-scroll');
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
