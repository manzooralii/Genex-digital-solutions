// JavaScript interactions for each section of the website

// ========== 1. Navbar Active Link Highlight ==========
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-links a').forEach(el => el.removeAttribute('id'));
    this.id = 'active';
  });
});

// ========== 2. Scroll to Section ==========
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = this.textContent.trim().toLowerCase().replace(/\s/g, '-');
    const target = document.querySelector('.' + section + '-section');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ========== 3. Button Scroll to Contact ==========
document.querySelector('.hero-text button').addEventListener('click', function () {
  const contact = document.querySelector('.login-section');
  if (contact) {
    window.scrollTo({
      top: contact.offsetTop - 60,
      behavior: 'smooth'
    });
  }
});

// ========== 4. Testimonials Hover Effect ==========
document.querySelectorAll('.cartt').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.8)';
  });
});

// ========== 5. Service Cards Hover Interaction ==========
document.querySelectorAll('.cart').forEach(service => {
  service.addEventListener('mouseenter', () => {
    service.style.transform = 'scale(1.05)';
  });
  service.addEventListener('mouseleave', () => {
    service.style.transform = 'scale(1)';
  });
});

// ========== 6. Form Submission ==========
document.querySelector('.right-section form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent successfully.');
  this.reset();
});

