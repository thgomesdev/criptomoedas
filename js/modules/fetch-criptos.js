import AnimateNumbers from './animate-numbers.js';

export default function initFetchCriptos() {
  function createCripto(cripto) {
    const div = document.createElement('div');
    div.classList.add('numero-criptomoeda');
    div.innerHTML = `<h3>${cripto.nome}</h3>
                     <span data-number>${cripto.total}</span>`;
    return div;
  }

  async function fetchCriptos(url) {
    try {
      const criptosResponse = await fetch(url);
      const criptosJSON = await criptosResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      criptosJSON.forEach((cripto) => {
        const divCripto = createCripto(cripto);
        numerosGrid.appendChild(divCripto);
      });

      const animateNumbers = new AnimateNumbers('[data-number]', '.numeros', 'ativo');
      animateNumbers.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchCriptos('./criptos-api.json');
}
