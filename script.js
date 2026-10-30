(() => {
  "use strict";

  const WHATSAPP_NUMBER = "917758068431";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Mobile navigation
  const menu = $("#menuToggle");
  const nav = $("#navLinks");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "✕" : "☰";
    });

    $$("a", nav).forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");
        menu.textContent = "☰";
      });
    });
  }

  // Footer year
  if ($("#year")) {
    $("#year").textContent = new Date().getFullYear();
  }

  // Load enquiry CSS
  if (!document.querySelector('link[href="enquiry.css"]')) {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "enquiry.css";
    document.head.append(css);
  }

  // Service information
  const services = [
    {
      title: "Electrical Panel Wiring & Assembly",
      description: "Reliable wiring and assembly support for industrial control panels.",
      details: "Control and power wiring, wire numbering, ferruling, terminal connections, PLC wiring, and inspection.",
      points: [
        "Control and power circuit wiring",
        "Wire numbering, ferruling, and terminal connections",
        "PLC, relay, contactor, and control component wiring",
        "Wiring inspection and continuity testing"
      ],
      key: "panel-wiring",
      button: "Enquire About Wiring →"
    },
    {
      title: "Electrical Panel Design & Engineering",
      description: "Professional electrical design solutions for industrial automation.",
      details: "Electrical schematics, component selection, panel layouts, and project documentation.",
      points: [
        "EPLAN Electric P8 schematic design",
        "Power and control circuit development",
        "PLC I/O planning and component selection",
        "Panel GA, mounting layout, and BOM"
      ],
      key: "panel-design",
      button: "Discuss Your Panel Design →"
    },
    {
      title: "PLC Programming, HMI & SCADA",
      description: "Automation solutions for industrial machines and production lines.",
      details: "PLC programming and automation development with HMI and SCADA integration.",
      points: [
        "Siemens S7-1200 / S7-1500",
        "Allen-Bradley CompactLogix / ControlLogix",
        "Ladder logic, sequencing, and interlocks",
        "HMI development and operator interfaces",
        "SCADA monitoring and data visualization",
        "Troubleshooting and commissioning support"
      ],
      key: "plc-scada",
      button: "Discuss Your Automation Project →"
    },
    {
      title: "Industrial Automation Consulting & Freelance Engineering",
      description: "Flexible engineering expertise for industrial automation projects.",
      details: "Freelance engineering, troubleshooting, on-site support, integration, commissioning, and documentation.",
      points: [
        "PLC, HMI, and SCADA consulting",
        "EPLAN electrical design support",
        "Industrial communication and networking",
        "Control logic modification and integration",
        "Testing, commissioning, and documentation"
      ],
      key: "consulting",
      button: "Discuss Your Requirements →"
    }
  ];

  // Enquiry form definitions
  const schemas = {
    "panel-wiring": {
      title: "Panel Wiring Enquiry",
      intro: "Share your panel wiring requirements.",
      sections: [
        ["Company & Contact Details", [
          "Company Name|text|*",
          "Contact Person Name|text|*",
          "Business Email|email|*",
          "Mobile Number|tel|*",
          "Company / Project Location|text|*"
        ]],
        ["Panel Requirements", [
          "Panel Type|select*|PLC Control Panel;MCC Panel;PCC Panel;VFD / Drive Panel;Machine Control Panel;Other",
          "Number of Panels Required|number|*",
          "Operating Voltage|select|230 V AC;415 V AC;24 V DC;Other",
          "Required Work Scope|checks|Power wiring;Control wiring;PLC and I/O wiring;VFD wiring;Ferruling;Panel assembly;Continuity testing;On-site support"
        ]],
        ["Drawings & Schedule", [
          "Electrical Drawings Available|select|Available;Not available;Partially available",
          "Expected Project Start|select|Immediately;Within 1–2 weeks;Within 2–4 weeks;More than 1 month;Planning stage",
          "Estimated Budget|select|Below ₹25,000;₹25,000–₹50,000;₹50,000–₹1,00,000;Above ₹1,00,000;Not decided",
          "Technical Details / Special Requirements|textarea"
        ]]
      ]
    },

    "panel-design": {
      title: "Electrical Panel Design Enquiry",
      intro: "Tell us about your electrical design project.",
      sections: [
        ["Company Details", [
          "Company Name|text|*",
          "Contact Person|text|*",
          "Business Email|email|*",
          "Contact Number|tel|*",
          "Company / Project Location|text|*"
        ]],
        ["Project Details", [
          "Project Name|text|*",
          "Machine / Process Description|textarea|*",
          "Panel Type|select*|PLC Control Panel;MCC Panel;PCC Panel;VFD Panel;Machine Control Panel;Other"
        ]],
        ["Technical Requirements", [
          "PLC Make / Platform|select|Siemens;Allen-Bradley;Mitsubishi;Delta;Other",
          "Approximate PLC I/O Count|text",
          "Supply Voltage|select|230 V AC;415 V AC;24 V DC;Other",
          "Motor Ratings and Quantity|textarea",
          "VFD / Drive Requirements|select|Yes;No;To be decided"
        ]],
        ["Required Design Deliverables", [
          "Required Deliverables|checks|EPLAN schematics;Power and control diagrams;Panel GA;Mounting layout;Bill of Materials (BOM);PLC I/O list;Cable and wire schedule;Terminal plan;Load calculation;Other"
        ]],
        ["Schedule & Documents", [
          "Number of Panels / Design Packages|number|*",
          "Required Completion Date|date",
          "Estimated Budget|select|Below ₹25,000;₹25,000–₹50,000;₹50,000–₹1,00,000;Above ₹1,00,000;To be discussed",
          "Existing Drawings|select|Available;Partially available;New design required",
          "Additional Technical Specifications|textarea"
        ]]
      ]
    },
        "plc-scada": {
      title: "PLC Programming, HMI & SCADA Enquiry",
      intro: "Share your machine automation and control requirements.",
      sections: [
        ["Company & Contact Details", [
          "Company Name|text|*",
          "Contact Person|text|*",
          "Business Email|email|*",
          "Contact Number|tel|*",
          "Project Location|text|*"
        ]],
        ["Machine & Automation Details", [
          "Project / Machine Name|text|*",
          "Machine or Process Description|textarea|*",
          "Application Type|select*|New Machine Automation;Existing Machine Upgrade;Production Line Automation;Process Automation;Troubleshooting;Other",
          "PLC Make / Platform|select|Siemens;Allen-Bradley;Mitsubishi;Delta;Omron;Schneider Electric;Other;Not decided",
          "Existing PLC Model|text",
          "HMI / SCADA Platform|select|Siemens WinCC;FactoryTalk;Wonderware / AVEVA;Ignition;Other;Not decided"
        ]],
        ["Technical Scope", [
          "Required Services|checks|PLC Programming;HMI Development;SCADA Development;PLC-HMI Communication;Drive Integration;Servo Integration;Industrial Communication;Alarm and Trend Configuration;Troubleshooting;Commissioning;Documentation",
          "Approximate I/O Count|text",
          "Number of Machines / Stations|number",
          "Communication Protocol|select|PROFINET;PROFIBUS;Modbus TCP;Modbus RTU;EtherNet/IP;OPC UA;Other;Not decided",
          "Source Code / Existing Project Available|select|Yes;No;Partially available"
        ]],
        ["Schedule & Budget", [
          "Expected Start Date|date",
          "Required Completion Date|date",
          "Support Required|select|Remote Support;On-site Support;Both Remote and On-site",
          "Estimated Budget|select|Below ₹25,000;₹25,000–₹50,000;₹50,000–₹1,00,000;Above ₹1,00,000;To be discussed",
          "Additional Technical Requirements|textarea"
        ]]
      ]
    },
 "consulting": {
      title: "Industrial Automation Consulting Enquiry",
      intro: "Describe your engineering challenge and the support you need.",
      sections: [
        ["Company & Contact Details", [
          "Company Name|text|*",
          "Contact Person|text|*",
          "Business Email|email|*",
          "Contact Number|tel|*",
          "Project Location|text|*"
        ]],
        ["Project Information", [
          "Project / Machine Name|text|*",
          "Industry Type|select|Automotive;Manufacturing;Pharmaceutical;Food and Beverage;Packaging;Process Industry;Other",
          "Project Description|textarea|*",
          "Current Challenge / Problem|textarea|*"
        ]],
        ["Support Requirements", [
          "Required Support|checks|PLC Troubleshooting;Electrical Panel Troubleshooting;Machine Commissioning;PLC / HMI Modification;System Integration;Production Downtime Support;Technical Documentation;Design Review;Remote Assistance;On-site Engineering",
          "PLC / Automation Platform|text",
          "Preferred Support Mode|select|Remote;On-site;Hybrid;To be discussed",
          "Expected Support Duration|select|One-time Task;1–3 Days;1 Week;2–4 Weeks;Long-term Engagement;To be discussed"
        ]],
        ["Schedule & Budget", [
          "Preferred Start Date|date",
          "Estimated Budget|select|Below ₹10,000;₹10,000–₹25,000;₹25,000–₹50,000;Above ₹50,000;To be discussed",
          "Additional Information|textarea"
        ]]
      ]
    },
     "student-training": {
      title: "Industrial Automation Training Enquiry",
      intro: "Students and fresh graduates can share their details to discuss available training options.",
      sections: [
        ["Student Details", [
          "Student Full Name|text|*",
          "Email Address|email|*",
          "Mobile Number|tel|*",
          "City / Location|text|*",
          "College / Institute|text",
          "Degree / Qualification|select|Diploma;BE / BTech;ME / MTech;ITI;Other"
        ]],
        ["Training Preferences", [
          "Branch / Specialisation|select|Electrical;Electronics;Instrumentation;Mechanical;Mechatronics;Computer / IT;Other",
          "Current Academic Year|select|First Year;Second Year;Third Year;Final Year;Graduate;Working Professional",
          "Interested Training|checks|PLC Programming;HMI and SCADA;Industrial Automation;Electrical Panel Design;Electrical Panel Wiring;VFD and Drives;Industrial Communication;Practical Project Training",
          "Preferred Training Mode|select|Classroom / In-person;Online;Hybrid;To be discussed",
          "Preferred Duration|select|1–2 Weeks;3–4 Weeks;1–2 Months;More than 2 Months;To be discussed",
          "Preferred Start Date|date"
        ]],
        ["Additional Information", [
          "Learning Goals / Questions|textarea",
          "How did you hear about us?|select|College / Institute;Friend / Referral;Social Media;Website;Other"
        ]]
      ]
    }
  };

  // The next part will add the service cards and enquiry form interface.

    // Update service cards with enquiry buttons
  function updateServiceCards() {
    services.forEach(service => {
      const candidates = [
        `[data-service="${service.key}"]`,
        `#${service.key}`,
        `[data-key="${service.key}"]`
      ];

      let card = null;

      for (const selector of candidates) {
        card = $(selector);
        if (card) break;
      }

      if (!card) return;

      const existingButton = card.querySelector(".service-enquiry-btn");
      if (existingButton) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "service-enquiry-btn";
      button.textContent = service.button;
      button.addEventListener("click", () => openForm(service.key));

      card.appendChild(button);
    });
  }

  // Create the enquiry modal
  function ensureEnquiryModal() {
    if ($("#enquiryModal")) return;

    const modal = document.createElement("div");
    modal.id = "enquiryModal";
    modal.className = "enquiry-modal";
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
      <div class="enquiry-modal__backdrop" data-close-enquiry></div>

      <div
        class="enquiry-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiryTitle"
      >
        <button
          type="button"
          class="enquiry-modal__close"
          aria-label="Close enquiry form"
          data-close-enquiry
        >&times;</button>

        <div class="enquiry-modal__header">
          <p class="enquiry-modal__eyebrow">SMART AUTOMATION AND DESIGN</p>
          <h2 id="enquiryTitle">Project Enquiry</h2>
          <p id="enquiryIntro"></p>
        </div>

        <form id="enquiryForm">
          <div id="enquiryFields"></div>

          <p class="enquiry-modal__note">
            Your enquiry will open in WhatsApp with the details you enter.
            Please do not enter passwords or sensitive personal information.
            Drawings and other files can be shared separately in WhatsApp.
          </p>

          <button type="submit" class="enquiry-submit-btn">
            Send Enquiry on WhatsApp
          </button>

          <p id="enquiryStatus" class="enquiry-status" role="status"></p>
        </form>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelectorAll("[data-close-enquiry]").forEach(button => {
      button.addEventListener("click", closeForm);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeForm();
      }
    });
  }

  // Convert a field definition into an HTML form field
  function makeField(definition, index) {
    const parts = definition.split("|");
    const label = parts[0];
    const type = parts[1] || "text";
    const options = parts[2] ? parts[2].split(";") : [];
    const required = type.endsWith("*") || parts[2] === "*";
    const actualType = type.replace("*", "");
    const id = "enquiry-field-" + index;

    const wrapper = document.createElement("div");
    wrapper.className = "enquiry-field";

    const labelElement = document.createElement("label");
    labelElement.htmlFor = id;
    labelElement.textContent = label + (required ? " *" : "");

    wrapper.appendChild(labelElement);

    let field;

    if (actualType === "textarea") {
      field = document.createElement("textarea");
      field.rows = 4;
    } else if (actualType === "select") {
      field = document.createElement("select");

      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Please select";
      field.appendChild(placeholder);

      options.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        field.appendChild(option);
      });
    } else if (actualType === "checks") {
      wrapper.classList.add("enquiry-field--checks");

      const group = document.createElement("div");
      group.className = "enquiry-check-options";

      options.forEach((optionText, optionIndex) => {
        const checkLabel = document.createElement("label");
        checkLabel.className = "enquiry-check-option";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = id;
        checkbox.value = optionText;
        checkbox.id = id + "-" + optionIndex;

        const text = document.createElement("span");
        text.textContent = optionText;

        checkLabel.append(checkbox, text);
        group.appendChild(checkLabel);
      });

      wrapper.appendChild(group);
      return wrapper;
    } else {
      field = document.createElement("input");
      field.type = actualType === "number" ? "number" : actualType;

      if (actualType === "number") {
        field.min = "1";
      }
    }

    field.id = id;
    field.name = label;
    field.required = required;

    if (actualType === "email") {
      field.autocomplete = "email";
    }

    if (actualType === "tel") {
      field.autocomplete = "tel";
    }

    wrapper.appendChild(field);

    return wrapper;
  }

  // Part 4 will add form opening, submission, and WhatsApp message handling.
    // Open the enquiry form
  function openForm(key) {
    const schema = schemas[key];
    if (!schema) return;

    ensureEnquiryModal();

    const modal = $("#enquiryModal");
    const title = $("#enquiryTitle");
    const intro = $("#enquiryIntro");
    const fieldsContainer = $("#enquiryFields");
    const form = $("#enquiryForm");
    const status = $("#enquiryStatus");

    title.textContent = schema.title;
    intro.textContent = schema.intro;
    fieldsContainer.innerHTML = "";
    status.textContent = "";

    let fieldIndex = 0;

    schema.sections.forEach(section => {
      const sectionElement = document.createElement("section");
      sectionElement.className = "enquiry-section";

      const heading = document.createElement("h3");
      heading.textContent = section[0];
      sectionElement.appendChild(heading);

      const fields = document.createElement("div");
      fields.className = "enquiry-section__fields";

      section[1].forEach(definition => {
        fields.appendChild(makeField(definition, fieldIndex++));
      });

      sectionElement.appendChild(fields);
      fieldsContainer.appendChild(sectionElement);
    });

    form.dataset.formKey = key;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("enquiry-modal-open");

    const firstInput = fieldsContainer.querySelector("input, select, textarea");
    if (firstInput) firstInput.focus();
  }

  // Close the enquiry form
  function closeForm() {
    const modal = $("#enquiryModal");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("enquiry-modal-open");
  }

  // Collect all form values
  function collectFormData(form) {
    const data = [];

    form.querySelectorAll(".enquiry-field").forEach(wrapper => {
      const labelElement = wrapper.querySelector(":scope > label");
      if (!labelElement) return;

      const label = labelElement.textContent.replace(/\s*\*$/, "");
      const checkboxes = wrapper.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      if (checkboxes.length) {
        data.push({
          label,
          value: [...checkboxes].map(item => item.value).join(", ")
        });
        return;
      }

      const field = wrapper.querySelector(
        "input:not([type='checkbox']), select, textarea"
      );

      if (field && field.value.trim()) {
        data.push({
          label,
          value: field.value.trim()
        });
      }
    });

    return data;
  }

  // Submit enquiry through WhatsApp
  function submitEnquiry(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const key = form.dataset.formKey;
    const schema = schemas[key];
    const values = collectFormData(form);
    const status = $("#enquiryStatus");

    const messageLines = [
      "*SMART AUTOMATION AND DESIGN*",
      "*" + schema.title + "*",
      "",
      "Hello, I would like to enquire about your services.",
      "",
      "*My Details:*"
    ];

    values.forEach(item => {
      messageLines.push("*" + item.label + ":* " + item.value);
    });

    messageLines.push("");
    messageLines.push(
      "Please contact me to discuss the requirements and next steps."
    );

    const message = messageLines.join("\n");

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);

    status.textContent = "Opening WhatsApp...";

    const whatsappWindow = window.open(whatsappURL, "_blank");

    if (!whatsappWindow) {
      status.textContent =
        "WhatsApp could not open automatically. Please allow pop-ups and try again.";
      return;
    }

    status.textContent =
      "WhatsApp opened. Please review and send your enquiry message.";
  }

  // Attach form submission handler
  function attachEnquiryEvents() {
    const form = $("#enquiryForm");

    if (form && !form.dataset.listenerAttached) {
      form.addEventListener("submit", submitEnquiry);
      form.dataset.listenerAttached = "true";
    }
  }

  // Part 5 will add training updates, curriculum popup handling,
  // and the final initialization.

    // Update the training section with an enquiry button
  function updateTraining() {
    const trainingSection =
      $("#training") ||
      $('[data-section="training"]');

    if (!trainingSection) return;

    if (trainingSection.querySelector(".training-enquiry-btn")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "training-enquiry-btn";
    button.textContent = "Enquire About Training →";

    button.addEventListener("click", () => {
      openForm("student-training");
    });

    trainingSection.appendChild(button);
  }

  // Ensure the existing PPPC curriculum popup remains functional
  function ensureCurriculumPopup() {
    const popup = $("#curriculumModal");

    if (!popup) return;

    const closeButtons = popup.querySelectorAll(
      "[data-close], .modal-close, .close-modal"
    );

    closeButtons.forEach(button => {
      button.addEventListener("click", () => {
        popup.classList.remove("is-open", "active", "show");
        popup.setAttribute("aria-hidden", "true");
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        popup.classList.remove("is-open", "active", "show");
        popup.setAttribute("aria-hidden", "true");
      }
    });
  }
  function attachOpenEnquiryTriggers() {
  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-open-enquiry]");
    if (!trigger) return;

    event.preventDefault();
    openForm(trigger.dataset.openEnquiry);
  });
  }

  // Initialize the website features
  function initializeWebsite() {
  updateServiceCards();
  updateTraining();
  ensureEnquiryModal();
  attachEnquiryEvents();
  attachOpenEnquiryTriggers();
  ensureCurriculumPopup();
  }

  // Run initialization after the page is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeWebsite);
  } else {
    initializeWebsite();
  }

})();
    
