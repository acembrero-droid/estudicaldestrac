/* ===== MENÚ MÒBIL ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  // Animació de les ratlles
  navToggle.classList.toggle('active');
});

/* Tancar menú en clicar un enllaç (mòbil) */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

/* ===== HEADER AMB SCROLL ===== */
const header = document.getElementById('siteHeader');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

/* ===== SCROLL REVEAL (IntersectionObserver) ===== */
const cards = document.querySelectorAll('.empresa-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // només anima una vegada
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

cards.forEach(card => observer.observe(card));

/* ===== EFECTE PARALLAX SUAU AL HERO (opcional) ===== */
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    hero.style.backgroundPositionY = `${scrolled * 0.3}px`;
  }
}, { passive: true });

/* ===== ANIMACIÓ DELS ENLLAÇOS EXTERNS ===== */
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', function () {
    // Petita animació de "pols" en clicar
    this.style.transform = 'scale(0.96)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});
