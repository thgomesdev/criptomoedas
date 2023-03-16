export default class ScrollAnimate {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHalf = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada section em relação ao topo da página
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - this.windowHalf,
      };
    });
  }

  // Verifica a distância de cada section em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
