
(() => {
  "use strict";

  // Business WhatsApp number: country code + number, without "+" or spaces.
  const WHATSAPP_NUMBER = "917758068431";

  const DEFAULT_MESSAGE =
    "Hello Amol, I would like to enquire about Smart Automation and Design services or training.";

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // WhatsApp links
  function createWhatsAppUrl(message) {
    return (
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message || DEFAULT_MESSAGE)}`
    );
  }

  function configureWhatsAppLink(link, message) {
    if (!link) return;

    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      link.removeAttribute("href");
      return;
    }

    link.href = createWhatsAppUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  // General WhatsApp buttons
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    configureWhatsAppLink(
      link,
      link.getAttribute("data-message") || DEFAULT_MESSAGE
    );
  });

  // Service enquiry buttons
  document.querySelectorAll("[data-service]").forEach((link) => {
    const service = link.dataset.service;

    configureWhatsAppLink(
      link,
      `Hello Amol, I would like to enquire about ${service} from Smart Automation and Design. Please share more details.`
    );
  });

  // Course enquiry buttons
  document.querySelectorAll("[data-course]").forEach((link) => {
    const course = link.dataset.course;

    configureWhatsAppLink(
      link,
      `Hello Amol, I am interested in ${course} at Smart Automation and Design. Please share the course details, fees, duration and upcoming batches.`
    );
  });

  // PPPC curriculum popup
  const modal = document.getElementById("curriculumModal");
  const openButton = document.getElementById("viewCurriculumBtn");

  const closeButtons = [
    document.getElementById("closeCurriculumBtn"),
    document.getElementById("closeCurriculumFooterBtn")
  ].filter(Boolean);

  let previousFocus = null;

  function openCurriculum() {
    if (!modal) return;

    previousFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    const closeButton = document.getElementById("closeCurriculumBtn");

    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeCurriculum() {
    if (!modal || modal.hidden) return;

    modal.hidden = true;
    document.body.style.overflow = "";

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  if (openButton && modal) {
    openButton.addEventListener("click", openCurriculum);
  }

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeCurriculum);
  });

  if (modal) {
    // Close when clicking the dark backdrop
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeCurriculum();
      }
    });

    // Close when the user presses Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) {
        closeCurriculum();
      }
    });

    // Close the popup when a curriculum enquiry link is selected
    modal.querySelectorAll("[data-course]").forEach((link) => {
      link.addEventListener("click", closeCurriculum);
    });
  }
})();
