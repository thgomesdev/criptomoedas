export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-animation='scroll']");
  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionIsVisible = sectionTop - windowHalf < 0;
      if (sectionIsVisible) {
        section.classList.add('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
