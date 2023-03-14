import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['touchstart', 'click'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, events, () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    // Passando dois eventos através de um array
    events.forEach((event) => {
      menu.addEventListener(event, handleClick);
    });
  });
}
