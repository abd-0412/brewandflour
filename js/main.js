/*
  Brew & Flour - Core JavaScript Manager
  Part of Safr Labs Portfolio piece
*/

const initApp = () => {
  initSplash();
  initHeader();
  initMobileMenu();
  initScrollTop();
  initAOS();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 1. Loading Splash Screen Behavior
function initSplash() {
  const splash = document.getElementById('loading-splash');
  if (!splash) return;

  // Under prefers-reduced-motion, hide splash instantly
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    if (typeof window.__hideSplash === 'function') window.__hideSplash();
    else splash.style.display = 'none';
    return;
  }

  // Hide after 1.5s (coordinated with the inline safety-net in <head>)
  // window.__hideSplash is idempotent — whichever fires first wins.
  setTimeout(() => {
    if (typeof window.__hideSplash === 'function') {
      window.__hideSplash();
    } else {
      // Fallback if inline script somehow missed
      splash.style.opacity = '0';
      setTimeout(() => { splash.style.display = 'none'; }, 500);
    }
  }, 1500);
}

// 2. Header and Scroll Highlighting
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Check on init

  // Highlight active link based on current path
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      // Clean paths to compare
      const cleanHref = href.replace('./', '').split('?')[0];
      const cleanPath = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
      
      if (cleanPath === cleanHref) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    }
  });
}

// 3. Mobile Hamburger Overlay Menu
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('close-btn');
  const overlay = document.getElementById('mobile-nav-overlay');
  
  if (!hamburgerBtn || !overlay) return;

  const openOverlay = () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    
    // Trap focus inside overlay
    overlay.addEventListener('keydown', trapFocus);
  };

  const closeOverlay = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburgerBtn.focus();
    overlay.removeEventListener('keydown', trapFocus);
  };

  hamburgerBtn.addEventListener('click', openOverlay);
  if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

  // Close on Escape press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeOverlay();
    }
  });

  // Close on clicking outside container
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    
    const focusables = overlay.querySelectorAll('a, button');
    if (focusables.length === 0) return;
    
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }
}

// 4. Scroll To Top Control
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 5. AOS v2.3.1 Initialization
function initAOS(retries = 0) {
  // Ensure AOS is loaded from the CDN before trying to execute
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 500,
      offset: 60,
      once: true,
      easing: 'ease-out-cubic'
    });
  } else if (retries < 10) {
    // Retry up to 10 times (×200ms = 2s max) in case CDN is slow
    setTimeout(() => initAOS(retries + 1), 200);
  }
  // If AOS never loads after 2s, silently skip — page still works without it
}


