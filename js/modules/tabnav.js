export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((descricaoCripto) => {
      descricaoCripto.classList.remove('ativo');
    });

    const { anime } = tabContent[index].dataset;
    tabContent[index].classList.add('ativo', anime);
  }

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
