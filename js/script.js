/* ================================================
   Light Peace Academy - JavaScript
   ================================================ */

// Hide loading overlay after page loads
window.addEventListener('load', () => {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    }, 1500);
  }
});

// Mobile Menu Toggle
function toggleMobileMenu() {
  const nav = document.getElementById('main-nav');
  if (nav) {
    nav.classList.toggle('active');
  }
}

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('main-nav');
    if (nav) {
      nav.classList.remove('active');
    }
  });
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;
  
  if (slides[currentSlide]) {
    slides[currentSlide].classList.add('active');
  }
  if (dots[currentSlide]) {
    dots[currentSlide].classList.add('active');
  }
}

function goToSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

// Auto-advance slider every 5 seconds
if (slides.length > 0) {
  setInterval(nextSlide, 5000);
  showSlide(currentSlide);
}

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
}

// Trigger counter animation when section is in view
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.classList.contains('hero-stats')) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  observer.observe(heroStats);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effects
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    }
  }
});

// Form validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Contact form submit (if exists)
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[name="name"]')?.value;
    const email = document.querySelector('input[name="email"]')?.value;
    const message = document.querySelector('textarea[name="message"]')?.value;
    
    // Validate
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}
