/**
 * Main Application Logic
 * Portfolio: Nguyễn Lê Anh Phú — Backend Software Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollSpy();
  initCopyActions();
  initMetricCounters();
});

/**
 * Mobile Navigation Toggle
 */
function initNav() {
  const toggleBtn = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('open');
  });

  // Close nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });
}

/**
 * Scroll Spy for active navigation highlight
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * Clipboard Copy with instant visual feedback
 */
function initCopyActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalHtml = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> [COPIED]`;
        
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalHtml;
        }, 2200);
      } catch (err) {
        console.error('Failed to copy to clipboard', err);
      }
    });
  });
}

/**
 * Animate Metric Numbers on scroll
 */
function initMetricCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetNum = parseFloat(target.getAttribute('data-counter'));
        const prefix = target.getAttribute('data-prefix') || '';
        const suffix = target.getAttribute('data-suffix') || '';
        const decimals = parseInt(target.getAttribute('data-decimals') || '0', 10);
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = targetNum * easeProgress;

          target.textContent = prefix + currentVal.toFixed(decimals) + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = prefix + targetNum.toFixed(decimals) + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}
