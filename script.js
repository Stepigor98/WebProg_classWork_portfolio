// Accessible mobile navigation and lightweight scroll reveals.
const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#siteNav');
const navLinks = [...document.querySelectorAll('.site-nav a')];

function closeMenu() {
  siteNav.classList.remove('is-open');
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

document.addEventListener('click', event => {
  if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const sections = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08, rootMargin: '0px 0px 30px 0px'});
  sections.forEach(section => revealObserver.observe(section));
  document.body.classList.add('js-enabled');
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
