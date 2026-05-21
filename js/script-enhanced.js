/**
 * Enhanced School Website JavaScript
 * Features: Dark Mode, Responsive Navigation, Animations, and User Interactions
 */

// ============================================
// 1. DARK MODE FUNCTIONALITY
// ============================================

const ThemeManager = {
  // Initialize theme on page load
  init() {
    this.prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.savedTheme = localStorage.getItem('theme');
    
    // Set initial theme
    if (this.savedTheme) {
      this.setTheme(this.savedTheme);
    } else {
      this.setTheme(this.prefersDarkMode ? 'dark' : 'light');
    }
    
    this.setupThemeToggle();
    this.listenToSystemPreference();
  },

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateThemeIcon(theme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },

  updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  },

  setupThemeToggle() {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggleTheme());
      toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    }
  },

  listenToSystemPreference() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.savedTheme) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
};

// ============================================
// 2. RESPONSIVE MOBILE MENU
// ============================================

const MobileMenu = {
  init() {
    this.toggle = document.querySelector('.mobile-menu-toggle');
    this.nav = document.querySelector('#main-nav');
    this.dropdowns = document.querySelectorAll('.dropdown');
    
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleMenu());
      this.toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleMenu();
        }
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-container')) {
        this.closeMenu();
      }
    });

    // Handle dropdown menus on mobile
    this.setupMobileDropdowns();

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        this.closeMenu();
      }
    });
  },

  toggleMenu() {
    this.nav.classList.toggle('mobile-active');
    this.toggle.setAttribute('aria-expanded', 
      this.toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  },

  closeMenu() {
    this.nav.classList.remove('mobile-active');
    this.toggle.setAttribute('aria-expanded', 'false');
  },

  setupMobileDropdowns() {
    this.dropdowns.forEach(dropdown => {
      const link = dropdown.querySelector('a');
      if (link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('open');
          }
        });
      }
    });
  }
};

// ============================================
// 3. LOADING ANIMATION
// ============================================

const LoadingScreen = {
  init() {
    this.overlay = document.getElementById('loading-overlay');
    if (this.overlay) {
      window.addEventListener('load', () => this.hide());
      // Fallback: hide after 3 seconds
      setTimeout(() => this.hide(), 3000);
    }
  },

  hide() {
    if (this.overlay) {
      this.overlay.classList.add('hide');
      setTimeout(() => {
        this.overlay.style.display = 'none';
      }, 500);
    }
  }
};

// ============================================
// 4. COUNTER ANIMATION
// ============================================

const CounterAnimation = {
  init() {
    this.counters = document.querySelectorAll('.counter, .stat-number');
    this.setupIntersectionObserver();
  },

  setupIntersectionObserver() {
    const options = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (!target.hasAttribute('data-animated')) {
            const finalValue = parseInt(target.getAttribute('data-target') || target.textContent);
            this.animateCounter(target, finalValue);
            target.setAttribute('data-animated', 'true');
          }
        }
      });
    }, options);

    this.counters.forEach(counter => observer.observe(counter));
  },

  animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, stepTime);
  }
};

// ============================================
// 5. IMAGE SLIDER
// ============================================

const ImageSlider = {
  currentIndex: 0,
  autoPlayInterval: null,

  init() {
    this.slides = document.querySelectorAll('.slides img');
    this.dots = document.querySelectorAll('.slider-dot');

    if (this.slides.length > 0) {
      this.startAutoPlay();
      this.setupDotClickHandlers();
    }
  },

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },

  stopAutoPlay() {
    clearInterval(this.autoPlayInterval);
  },

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
  },

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentIndex);
  },

  goToSlide(index) {
    this.currentIndex = index;
    this.showSlide(index);
    this.stopAutoPlay();
    this.startAutoPlay();
  },

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  },

  setupDotClickHandlers() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
  }
};

// ============================================
// 6. SMOOTH SCROLL & ACTIVE LINK
// ============================================

const Navigation = {
  init() {
    this.setupActiveLinks();
    this.setupSmoothScroll();
    window.addEventListener('scroll', () => this.updateActiveLink());
  },

  setupActiveLinks() {
    const links = document.querySelectorAll('nav a[href^="#"], nav a[href*="html"]');
    links.forEach(link => {
      if (link.href === window.location.href || 
          link.getAttribute('href') === window.location.pathname.split('/').pop()) {
        link.classList.add('active');
      }
    });
  },

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && !href.includes('false')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  },

  updateActiveLink() {
    // Update active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }
};

// ============================================
// 7. SCROLL ANIMATIONS
// ============================================

const ScrollAnimations = {
  init() {
    this.setupIntersectionObserver();
  },

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all feature cards, testimonials, etc.
    document.querySelectorAll('.feature, .testimonial, .link-card, .stat-item-large').forEach(el => {
      observer.observe(el);
    });
  }
};

// ============================================
// 8. HEADER SCROLL EFFECT
// ============================================

const HeaderEffect = {
  init() {
    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  }
};

// ============================================
// 9. UTILITY FUNCTIONS
// ============================================

function toggleMobileMenu() {
  MobileMenu.toggleMenu();
}

function goToSlide(index) {
  ImageSlider.goToSlide(index);
}

// ============================================
// 10. INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  ThemeManager.init();
  MobileMenu.init();
  LoadingScreen.init();
  CounterAnimation.init();
  ImageSlider.init();
  Navigation.init();
  ScrollAnimations.init();
  HeaderEffect.init();

  console.log('School Website Enhanced Features Initialized');
});

// ============================================
// 11. WINDOW RESIZE HANDLING
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Adjust for responsive changes
    if (window.innerWidth > 768) {
      MobileMenu.closeMenu();
    }
  }, 250);
});

// ============================================
// 12. KEYBOARD ACCESSIBILITY
// ============================================

document.addEventListener('keydown', (e) => {
  // Close mobile menu on Escape
  if (e.key === 'Escape') {
    MobileMenu.closeMenu();
  }

  // Theme toggle with Alt + T
  if (e.altKey && e.key === 't') {
    e.preventDefault();
    ThemeManager.toggleTheme();
  }
});

// ============================================
// 13. PREFETCH LINKS FOR PERFORMANCE
// ============================================

document.querySelectorAll('a[href*=".html"]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#')) {
    const prefetch = document.createElement('link');
    prefetch.rel = 'prefetch';
    prefetch.href = href;
    document.head.appendChild(prefetch);
  }
});

console.log('Enhanced School Website Initialized Successfully');
