
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const interest = document.getElementById('interest');
    if (interest) interest.value = link.dataset.service;
  });
});

document.querySelectorAll('[data-course]').forEach(link => {
  link.addEventListener('click', () => {
    const interest = document.getElementById('interest');
    if (interest) {
      interest.value = link.dataset.course.includes('Training')
        ? 'Offline Classroom Training'
        : 'Online Training';
    }
  });
});

const form = document.getElementById('enquiryForm');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);
    const status = document.getElementById('formStatus');

    const businessEmail = ''; // Add your business email here.

    if (!businessEmail) {
      status.textContent =
        'Please configure the business email before receiving enquiries.';
      status.style.color = '#a15c00';
      return;
    }

    const subject = encodeURIComponent(
      'Website enquiry - Smart Automation and Design'
    );

    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
      `Company: ${data.get('company') || 'Not provided'}\n` +
      `Phone: ${data.get('phone')}\n` +
      `Email: ${data.get('email') || 'Not provided'}\n` +
      `Interest: ${data.get('interest')}\n` +
      `Requirements: ${data.get('message')}`
    );

    window.location.href =
      `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  });
}

const whatsappLink = document.getElementById('whatsappLink');

if (whatsappLink) {
  whatsappLink.addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  });
               }
