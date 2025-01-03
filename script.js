const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector('.hero-image img');
  
  // Add a periodic animation effect
  setInterval(() => {
      heroImage.classList.toggle('glow');
  }, 2000);
});

// Add CSS class for glow effect in periodic animation


