export function initHero() {
  const container = document.querySelector('.hero-bg-container');
  // Inject single static image
  const slide = document.createElement('div');
  slide.classList.add('hero-bg-slide', 'active');
  slide.style.backgroundImage = `url('/assets/images/hero_image_bengali_1773571565971.png')`;
  container.appendChild(slide);

  // Initial text animations using GSAP
  // Wait for window load to ensure all DOM elements are fully available 
  if (typeof gsap !== 'undefined') {
    window.addEventListener('load', () => {
      // Small timeout to guarantee test suite injections or layout calculations
      setTimeout(() => {
        if(document.querySelector('.hero-title')) {
          gsap.fromTo('.hero-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 });
        }
        if(document.querySelector('.hero-subtitle')) {
          gsap.fromTo('.hero-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
        }
        if(document.querySelector('.hero-btn')) {
          gsap.fromTo('.hero-btn', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 });
        }
      }, 50);
    });
  }
}
