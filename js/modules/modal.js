export default function initModal() {
  const modalContainer = document.querySelector('.modal-container');
  const btnOpenModal = document.querySelector("[data-modal='abrir']");
  const btnCloseModal = document.querySelector("[data-modal='fechar']");

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
  }

  function outModalClick(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (modalContainer && btnOpenModal && btnCloseModal) {
    btnOpenModal.onclick = toggleModal;
    btnCloseModal.onclick = toggleModal;
    modalContainer.onclick = outModalClick;
  }
}
