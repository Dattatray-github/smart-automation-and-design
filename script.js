
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Mobile navigation
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation menu');
      menuToggle.textContent = '☰';
    });
  });
}

// Current copyright year
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// WhatsApp configuration
const WHATSAPP_NUMBER = '919960302198';

const defaultMessage =
  'Hello Smart Automation and Design, I would like to enquire about your services or training.';

function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function configureWhatsAppLink(link, message) {
  if (!link) return;

  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    link.removeAttribute('href');
    return;
  }

  link.href = createWhatsAppUrl(message);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
}

// Main contact button and floating WhatsApp button
configureWhatsAppLink(
  document.getElementById('whatsappLink'),
  defaultMessage
);

configureWhatsAppLink(
  document.getElementById('whatsappFloatingLink'),
  defaultMessage
);

// Service-specific enquiry links
document.querySelectorAll('[data-service]').forEach(link => {
  const service = link.dataset.service;

  configureWhatsAppLink(
    link,
    `Hello Smart Automation and Design, I would like to enquire about ${service}. Please share more details.`
  );
});

// Course-specific enquiry links
document.querySelectorAll('[data-course]').forEach(link => {
  const course = link.dataset.course;

  configureWhatsAppLink(
    link,
    `Hello Smart Automation and Design, I am interested in ${course}. Please share the course details, fees, duration and upcoming batches.`
  );
});

