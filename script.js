// year
document.getElementById('yr').textContent = new Date().getFullYear();

// mobile nav
const nav = document.getElementById('nav');
const burger = nav.querySelector('.nav__burger');
const menu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) menu.hidden = false; else menu.hidden = true;
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded','false');
    menu.hidden = true;
  }
});

// reveal-on-scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.card, .step, .oc, .stat, .fchip, .about__copy, .hero__copy, .section-head, .contact__form, .contact__copy')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });
