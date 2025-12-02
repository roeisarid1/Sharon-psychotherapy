function createNavigation(activePage) {
  const nav = document.createElement("nav");
  nav.className =
    "navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm";

  const navItems = [
    { href: "../index.html", text: "דף הבית", page: "index" },
    { href: "method.html", text: "שיטת הטיפול", page: "method" },
    { href: "about.html", text: "אודות", page: "about" },
    { href: "areas.html", text: "תחומי טיפול", page: "areas" },
    { href: "process.html", text: "התהליך הטיפולי", page: "process" },
    { href: "why.html", text: "למה כאן", page: "why" },
    {
      href: "contact.html",
      text: "יצירת קשר",
      page: "contact",
      isButton: true,
    },
  ];

  nav.innerHTML = `
    <div class="container">
      <a class="navbar-brand fw-bold" href="${
        activePage === "index" ? "index.html" : "../index.html"
      }">שרון שריד - פסיכותרפיה CBT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          ${navItems
            .map(
              (item) => `
            <li class="nav-item">
              <a class="nav-link ${item.isButton ? "btn-contact" : ""} ${
                activePage === item.page ? "active" : ""
              }" 
                 href="${item.href}">${item.text}</a>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;

  return nav;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "bg-dark text-white py-4 mt-5";

  footer.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>שרון שריד - פסיכותרפיה CBT</h5>
          <p class="mb-0">טיפול קוגניטיבי-התנהגותי בזכרון יעקב והסביבה</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="mb-0">טלפון: 050-2044475</p>
          <p class="mb-0">אימייל: sharon2848@gmail.com</p>
        </div>
      </div>
      <hr class="my-3 bg-white" />
      <div class="text-center">
        <small>&copy; 2025 שרון שריד. כל הזכויות שמורות.</small>
      </div>
    </div>
  `;

  return footer;
}

function createPageHeader(title, subtitle) {
  const section = document.createElement("section");
  section.className = "page-header py-5 bg-light";

  section.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-5 fw-bold mb-3">${title}</h1>
          <p class="lead">${subtitle}</p>
        </div>
      </div>
    </div>
  `;

  return section;
}

function createInfoCard(icon, text) {
  return `
    <div class="info-card p-3">
      <div class="info-icon mb-2">${icon}</div>
      <div class="info-text">${text}</div>
    </div>
  `;
}

function createTreatmentCard(icon, title, description, details) {
  return `
    <div class="card h-100 border-0 shadow-sm treatment-card">
      <div class="card-body p-4">
        <div class="treatment-icon mb-3">${icon}</div>
        <h3 class="h4 mb-3">${title}</h3>
        <p class="card-text">${description}</p>
        <div class="mt-3">
          <small class="text-muted"><strong>כולל:</strong> ${details}</small>
        </div>
      </div>
    </div>
  `;
}

function createTestimonialCard(stars, text, initial, name, role) {
  return `
    <div class="testimonial-card">
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-text">${text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${initial}</div>
        <div class="testimonial-info">
          <div class="testimonial-name">${name}</div>
          <div class="testimonial-role">${role}</div>
        </div>
      </div>
    </div>
  `;
}

function createProcessStep(number, title, content) {
  return `
    <div class="process-step mb-5">
      <div class="row align-items-center">
        <div class="col-md-2 text-center mb-3 mb-md-0">
          <div class="step-number-circle">${number}</div>
        </div>
        <div class="col-md-10">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4">
              <h3 class="h4 mb-3">${title}</h3>
              ${content}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createAccordionItem(id, question, answer, isOpen = false) {
  return `
    <div class="accordion-item border-0 shadow-sm mb-3">
      <h3 class="accordion-header">
        <button class="accordion-button ${
          isOpen ? "" : "collapsed"
        }" type="button" 
                data-bs-toggle="collapse" data-bs-target="#${id}">
          ${question}
        </button>
      </h3>
      <div id="${id}" class="accordion-collapse collapse ${
    isOpen ? "show" : ""
  }" 
           data-bs-parent="#faqAccordion">
        <div class="accordion-body">${answer}</div>
      </div>
    </div>
  `;
}

function createContactForm() {
  return `
    <form action="https://formspree.io/f/xwpyovkv" method="POST">
      <div class="mb-3">
        <label for="name" class="form-label">שם מלא</label>
        <input type="text" class="form-control" id="name" name="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">אימייל</label>
        <input type="email" class="form-control" id="email" name="email" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">טלפון</label>
        <input type="tel" class="form-control" id="phone" name="phone" />
      </div>
      <div class="mb-4">
        <label for="message" class="form-label">הודעה</label>
        <textarea class="form-control" id="message" name="message" rows="4" 
                  placeholder="ספרו לנו קצת על מה שמטריד אתכם..."></textarea>
      </div>
      <div class="d-grid">
        <button type="submit" class="btn btn-primary btn-lg">שלח/י פרטים</button>
      </div>
    </form>
  `;
}

function createCTASection(title, subtitle, buttonText, buttonLink) {
  return `
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="mb-4">${title}</h2>
            <p class="lead mb-4">${subtitle}</p>
            <a href="${buttonLink}" class="btn btn-primary btn-lg px-5">${buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initializeNavigation(activePage) {
  const navPlaceholder = document.getElementById("nav-placeholder");
  if (navPlaceholder) {
    navPlaceholder.replaceWith(createNavigation(activePage));
  }
}

function initializeFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.replaceWith(createFooter());
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    createNavigation,
    createFooter,
    createPageHeader,
    createInfoCard,
    createTreatmentCard,
    createTestimonialCard,
    createProcessStep,
    createAccordionItem,
    createContactForm,
    createCTASection,
    initializeNavigation,
    initializeFooter,
  };
}
