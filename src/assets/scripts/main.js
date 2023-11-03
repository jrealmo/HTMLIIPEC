/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Desplegable para las secciones
const sections = document.querySelectorAll('.gunpla-section');
const sectionTitles = document.querySelectorAll('.gunpla-section__title');

sections.forEach((section) => {
  const content = section.querySelector('.gunpla-section__content');
  content.style.display = 'none';
});

sectionTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    const content = sections[index].querySelector('.gunpla-section__content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';

    if (content.style.display === 'block') {
      const sectionId = sections[index].id;
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const content = targetSection.querySelector('.gunpla-section__content');
      content.style.display = 'block';

      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});





