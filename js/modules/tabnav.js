export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o index e anima de acordo com a direção indicada no dataset
  activeTab(index) {
    this.tabContent.forEach((descricaoCripto) => {
      descricaoCripto.classList.remove(this.activeClass);
    });

    const { anime } = this.tabContent[index].dataset;

    this.tabContent[index].classList.add(this.activeClass, anime);
  }

  // Adicionar eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
