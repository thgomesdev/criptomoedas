export default function initNumbersAnimation() {
  function numbersAnimation() {
    const numbers = document.querySelectorAll('[data-number]');

    numbers.forEach((number) => {
      const total = +number.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;

        number.innerText = start;

        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());

      console.log(total);
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      numbersAnimation();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, { attributes: true });
}
