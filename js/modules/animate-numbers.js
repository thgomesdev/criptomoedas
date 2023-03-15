export default class AnimateNumbers {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind do objeto da classe aos callbacks
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento com número total incrementa de 0 até este número
  static incrementNumbers(number) {
    const total = +number.innerText;
    const increment = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      number.innerText = start;
      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animateNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumbers(number));
  }

  // Pega a mutação e verifica se o elemento já possui a observer class para
  // desconectar o observador e executar a animação dos números com o incremento
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numbersAnimation();
    }
  }

  // Adiciona o MutationObserver para verificar quando a
  // observer classs (neste caso = 'ativo') é adicionada ao observer target (elemento alvo)
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
