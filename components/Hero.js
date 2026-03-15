export function initHero() {
  const container = document.querySelector('.hero-bg-container');
  // Inject single static image
  const slide = document.createElement('div');
  slide.classList.add('hero-bg-slide', 'active');
  slide.style.backgroundImage = `url('/assets/images/hero_image_bengali_1773571565971.png')`;
  container.appendChild(slide);

  // Initial text animations using GSAP
  if (typeof gsap !== 'undefined') {
    gsap.fromTo('.hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
    gsap.fromTo('.hero-btn', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 });
  }
}
