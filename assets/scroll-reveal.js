// ponytail: generic fade-up-on-scroll for any .section-wrapper (Horizon's flexible "Section" block).
// Upgrade path: per-section opt-out setting if a merchant wants a section excluded.
const targets = document.querySelectorAll('.section-wrapper');

if (targets.length && 'IntersectionObserver' in window) {
  targets.forEach((el) => el.classList.add('scroll-reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal--visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}
