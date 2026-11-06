// Fades elements in as they scroll into view.
export function initReveal(selector = '.reveal') {
  const items = document.querySelectorAll(selector);

  // Fallback for very old browsers: just show everything.
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // reveal once
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}
