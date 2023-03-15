export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // cria um espaço entre o cursor e a tooltip evitando bugs
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;

    if (event.pageX + 230 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    }
    if (event.pageX + 230 < window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltipbox no momento que o cursor sai do elemento alvo
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // cria a tooltipbox e insere ela em uma propriedade do objeto da classe
  createTooltipBox = (element) => {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');

    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  };

  // currentTarget = elevemento alvo do tooltip (desestruturação do event)
  onMouseOver({ currentTarget }) {
    // cria a tooltibox com o texto do elemento alvo da tooltip e coloca em uma prop
    this.createTooltipBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adiciona o evento de mouse over a cada tooltip
  addToolTipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToolTipsEvent();
    }
    return this;
  }
}
