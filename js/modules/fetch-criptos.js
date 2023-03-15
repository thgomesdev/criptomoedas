import AnimateNumbers from './animate-numbers.js';

export default function fetchCriptos(url, target) {
  // A partir de um dos elementos do json cria uma div
  // com o nome e total da cripto
  function createDivCripto(cripto) {
    const div = document.createElement('div');
    div.classList.add('numero-criptomoeda');
    div.innerHTML = `<h3>${cripto.nome}</h3>
                     <span data-number>${cripto.total}</span>`;
    return div;
  }

  function animateCriptosNumbers() {
    const animateNumbers = new AnimateNumbers('[data-number]', '.numeros', 'ativo');
    animateNumbers.init();
  }

  // Definindo elemento alvo que receberá a div da cripto e depois inserindo a div no alvo
  const elementTarget = document.querySelector(target);
  function insertCriptoDivInTarget(cripto) {
    const divCripto = createDivCripto(cripto);
    elementTarget.appendChild(divCripto);
  }

  // Puxa as criptos através de um arquivo JSON
  // e cria cada uma das criptos utilizando o createCripto
  async function createCriptos() {
    try {
      // Fetch e aguarda a resposta e transforma em JSON
      const criptosResponse = await fetch(url);
      const criptosJSON = await criptosResponse.json();

      // Executa a insertCriptoInTarget para todas as criptos que estiverem no JSON.
      criptosJSON.forEach((cripto) => insertCriptoDivInTarget(cripto));
      // Anima os números das criptos
      animateCriptosNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return createCriptos();
}
