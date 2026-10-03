(function() {
  const navToggle = document.querySelector('.navbar-toggler');
  const navCollapse = document.querySelector('.navbar-collapse');
  const themeToggle = document.getElementById('themeToggle');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const revealNodes = document.querySelectorAll('.reveal');
  const heroPanel = document.querySelector('.hero-panel');
  const heroGrid = document.querySelector('.hero-grid');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reducedMotion = motionPreference.matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const iconMoon = '<svg class="icon icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" fill="currentColor"/></svg>';
  const iconSun = '<svg class="icon icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

  const applyTheme = (theme) => {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-theme', isLight);
    themeColorMeta?.setAttribute('content', isLight ? '#f4f6fa' : '#07111f');

    if (themeToggle) {
      themeToggle.innerHTML = isLight ? iconSun : iconMoon;
      themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    }
  };

  try {
    const storedTheme = localStorage.getItem('ayush-portfolio-theme');
    const preferredTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    applyTheme(preferredTheme);
  } catch (error) {
    applyTheme('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
      try {
        localStorage.setItem('ayush-portfolio-theme', nextTheme);
      } catch (error) {}
      applyTheme(nextTheme);
    });
  }

  if (navToggle && navCollapse) {
    navToggle.addEventListener('click', () => {
      const isOpen = navCollapse.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 760) {
        navCollapse?.classList.remove('is-open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      navCollapse?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('a.page-scroll').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;
      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 20;
      window.scrollTo({ top, behavior: motionPreference.matches ? 'auto' : 'smooth' });
    });
  });

  let pointerFrameId = null;
  motionPreference.addEventListener?.('change', (event) => {
    if (!event.matches || !heroPanel) return;

    if (pointerFrameId) {
      cancelAnimationFrame(pointerFrameId);
      pointerFrameId = null;
    }

    heroPanel.style.setProperty('--rx', '0deg');
    heroPanel.style.setProperty('--ry', '0deg');
    heroGrid?.style.setProperty('--hero-shift-x', '0px');
    heroGrid?.style.setProperty('--hero-shift-y', '0px');
  });

  if (heroPanel && finePointer && !reducedMotion) {
    heroPanel.addEventListener('pointermove', (event) => {
      if (motionPreference.matches || pointerFrameId) return;

      pointerFrameId = requestAnimationFrame(() => {
        const rect = heroPanel.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rx = (0.5 - py) * 5;
        const ry = (px - 0.5) * 7;

        heroPanel.style.setProperty('--rx', `${rx}deg`);
        heroPanel.style.setProperty('--ry', `${ry}deg`);

        if (heroGrid) {
          heroGrid.style.setProperty('--hero-shift-x', `${(px - 0.5) * 10}px`);
          heroGrid.style.setProperty('--hero-shift-y', `${(py - 0.5) * 8}px`);
        }

        pointerFrameId = null;
      });
    }, { passive: true });

    heroPanel.addEventListener('pointerleave', () => {
      if (pointerFrameId) {
        cancelAnimationFrame(pointerFrameId);
        pointerFrameId = null;
      }

      heroPanel.style.setProperty('--rx', '0deg');
      heroPanel.style.setProperty('--ry', '0deg');

      if (heroGrid) {
        heroGrid.style.setProperty('--hero-shift-x', '0px');
        heroGrid.style.setProperty('--hero-shift-y', '0px');
      }
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    const startObservingReveals = () => {
      if (document.visibilityState !== 'visible') return;

      document.body.classList.add('reveal-active');
      revealNodes.forEach((node) => observer.observe(node));
      document.removeEventListener('visibilitychange', startObservingReveals);
    };

    startObservingReveals();
    if (!document.body.classList.contains('reveal-active')) {
      document.addEventListener('visibilitychange', startObservingReveals);
    }
  } else {
    revealNodes.forEach((node) => node.classList.add('visible'));
  }
})();