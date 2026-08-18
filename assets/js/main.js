const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

const closeMenu = () => {
  if (!toggle || !nav) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
};

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', event => {
    if (!nav.classList.contains('open')) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });
}

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Keep both the main navigation and the quick navigation synchronized.
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"], .jump-nav a[href^="#"]')];
const sectionIds = [...new Set(sectionLinks.map(link => link.getAttribute('href').slice(1)).filter(Boolean))];
const trackedSections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

if ('IntersectionObserver' in window && trackedSections.length) {
  const linksById = new Map();
  sectionLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    if (!linksById.has(id)) linksById.set(id, []);
    linksById.get(id).push(link);
  });

  const setActiveSection = id => {
    sectionLinks.forEach(link => {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    });
    (linksById.get(id) || []).forEach(link => {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'location');
    });
  };

  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveSection(visible.target.id);
  }, {
    rootMargin: '-24% 0px -62% 0px',
    threshold: [0, 0.1, 0.3]
  });

  trackedSections.forEach(section => observer.observe(section));
}

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const updateBackToTop = () => {
    backToTop.classList.toggle('visible', window.scrollY > 700);
  };
  updateBackToTop();
  window.addEventListener('scroll', updateBackToTop, { passive: true });
}
