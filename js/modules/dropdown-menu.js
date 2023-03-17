import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';
    this.events = ['touchstart', 'click'];

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdown menu e adiciona a função para observar o click fora do menu
  activeDropdownMenu(event) {
    event.preventDefault();
    event.currentTarget.classList.add(this.activeClass);

    outsideClick(event.currentTarget, this.events, () => {
      event.currentTarget.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos de click ou touchstart a cada um dos menus
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      // Passando dois eventos para cada um dos menus dropdown
      // que ativam a mesma função
      this.events.forEach((event) => {
        menu.addEventListener(event, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
