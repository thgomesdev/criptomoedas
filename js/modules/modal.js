export default class Modal {
  constructor(buttonOpen, buttonClose, containerModal) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para o this apontar para o objeto da classe
    this.toggleModal = this.toggleModal.bind(this);
    this.outModalClick = this.outModalClick.bind(this);
  }

  // abre ou fecha o modal
  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle('ativo');
  }

  // fecha o modal ao clicar fora dele
  outModalClick(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // adiciona os eventos aos botões e ao modal
  addModalEvent() {
    this.buttonOpen.addEventListener('click', this.toggleModal);
    this.buttonClose.addEventListener('click', this.toggleModal);
    this.containerModal.addEventListener('click', this.outModalClick);
  }

  init() {
    if (this.containerModal && this.buttonOpen && this.buttonClose) {
      this.addModalEvent();
    }
    return this;
  }
}
