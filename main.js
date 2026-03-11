const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.innerHTML = navLinks.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Modals
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open'); document.body.style.overflow = '';
    });
  }
});

// Contact form
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    formNote.textContent = '✓ Thank you! I\'ll get back to you soon.';
    formNote.style.color = '#16a34a';
    contactForm.reset();
    setTimeout(() => { formNote.textContent = ''; }, 5000);
  });
}

// Scroll-reveal (IntersectionObserver)
const revealEls = document.querySelectorAll(
  '.stat-card, .skill-bubble, .project-card, .cert-card, .edu-item, .about-text p'
);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = opacity 0.5s ease ${i * 0.045}s, transform 0.5s ease ${i * 0.045}s;
  observer.observe(el);
});

// Active nav highlight on scroll
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('#navLinks a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 110) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === #${current} ? 'var(--rose-deep)' : '';
  });
});