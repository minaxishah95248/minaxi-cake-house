
/* ========================================
   MINAXI CAKE HOUSE - WEBSITE SETTINGS
======================================== */

const SITE_PHONE = "918780701107";
const SITE_PHONE_DISPLAY = "+91 87807 01107";

const SITE_ADDRESS =
  "2213/1 Bauani Pole, Raipur Chakla, Near Dwarkadhish Temple, Ahmedabad, Gujarat - 380001";

const SITE_INSTAGRAM = "https://www.instagram.com/minaxishah95248/";
const SITE_INSTAGRAM_ID = "@minaxishah95248";

const SITE_FOUNDERS = "Krrish & Sujal";

const SITE_ORDER_NOTICE = "Please Order One Day Before";


/* ========================================
   GLOBAL BRAND STYLING
======================================== */

const brandFont = document.createElement("link");
brandFont.rel = "stylesheet";
brandFont.href =
  "https://fonts.googleapis.com/css2?family=Allura&display=swap";

document.head.appendChild(brandFont);

const brandStyle = document.createElement("style");

brandStyle.textContent = `
  .order-notice-bar {
    width: 100%;
    padding: 11px 15px;
    box-sizing: border-box;
    text-align: center;
    background: #402b26;
    color: #fff7ed;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .founder-signature {
    font-family: 'Allura', cursive;
    font-size: 32px;
    color: #bd8583;
    font-weight: 400;
    line-height: 1.3;
  }

  .founder-caption {
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #b5a49c;
  }

  .footer-instagram {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: #bd8583;
    text-decoration: none;
    margin-top: 12px;
    font-size: 13px;
    transition: 0.3s;
  }

  .footer-instagram:hover {
    color: #ffffff;
  }

  .footer-founders {
    margin-top: 22px;
  }

  .js-phone {
    text-decoration: none;
  }

  @media(max-width: 600px) {
    .order-notice-bar {
      font-size: 9px;
      letter-spacing: 1.3px;
    }
  }
`;

document.head.appendChild(brandStyle);


/* ========================================
   GLOBAL ORDER ANNOUNCEMENT
======================================== */

const orderNotice = document.createElement("div");

orderNotice.className = "order-notice-bar";
orderNotice.textContent = "♡ " + SITE_ORDER_NOTICE + " ♡";

document.body.prepend(orderNotice);


/* ========================================
   WEBSITE NAVIGATION
======================================== */

const navItems = [
  ["Home", "index.html"],
  ["About Us", "about.html"],
  ["Our Cakes", "cakes.html"],
  ["Gallery", "gallery.html"],
  ["Contact", "contact.html"],
  ["FAQs", "faq.html"]
];

const current =
  location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("site-header");

if (header) {
  header.innerHTML = `
    <header class="site-header">

      <a class="brand" href="index.html">
        <img src="./minaxi-logo.png" alt="Minaxi Cake House">
        <span>
          <strong>Minaxi Cake House</strong>
          <small>BAKED WITH LOVE</small>
        </span>
      </a>

      <button class="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded="false">
        ☰
      </button>

      <nav class="nav">
        ${navItems.map(([label, url]) => `
          <a href="${url}"
             class="${current === url ? "active" : ""}">
            ${label}
          </a>
        `).join("")}

        <a class="nav-cta" href="custom-orders.html">
          Order a cake ↗
        </a>
      </nav>

    </header>
  `;

  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");

    toggle.setAttribute("aria-expanded", isOpen);
    toggle.textContent = isOpen ? "×" : "☰";
  });
}


/* ========================================
   WEBSITE FOOTER
======================================== */

const footer = document.getElementById("site-footer");

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">

      <div class="footer-top">

        <div class="footer-brand">

          <strong>Minaxi Cake House</strong>

          <p>
            Where every cake tells a sweet story.
            Handcrafted sweetness for your happiest moments.
          </p>

          <div class="footer-founders">

            <div class="founder-caption">
              PROUDLY CREATED BY
            </div>

            <div class="founder-signature">
              ${SITE_FOUNDERS}
            </div>

            <div class="founder-caption">
              FOUNDERS OF MINAXI CAKE HOUSE
            </div>

          </div>

        </div>

        <div>
          <h4>EXPLORE</h4>

          <div class="footer-links">
            <a href="about.html">Our story</a>
            <a href="cakes.html">Our cakes</a>
            <a href="gallery.html">Cake gallery</a>
            <a href="faq.html">FAQs</a>
            <a href="contact.html">Contact us</a>
          </div>
        </div>

        <div class="footer-contact">

          <h4>GET IN TOUCH</h4>

          <p>
            <a href="https://wa.me/${SITE_PHONE}"
               target="_blank"
               rel="noopener">
              ${SITE_PHONE_DISPLAY}
            </a>
          </p>

          <p>${SITE_ADDRESS}</p>

          <a href="https://wa.me/${SITE_PHONE}"
             target="_blank"
             rel="noopener">
            WhatsApp us ↗
          </a>

          <a class="footer-instagram"
             href="${SITE_INSTAGRAM}"
             target="_blank"
             rel="noopener">
            Instagram: ${SITE_INSTAGRAM_ID} ↗
          </a>

        </div>

      </div>

      <div class="footer-bottom">

        <span>
          © ${new Date().getFullYear()} Minaxi Cake House.
          All rights reserved.
        </span>

        <span>Made with ♡ and a little sugar.</span>

      </div>

    </footer>
  `;
}


/* ========================================
   DISPLAY CONTACT DETAILS
======================================== */

document.querySelectorAll(".js-phone").forEach(el => {

  el.textContent = SITE_PHONE_DISPLAY;

  if (el.tagName === "A") {
    el.href = `https://wa.me/${SITE_PHONE}`;
    el.target = "_blank";
    el.rel = "noopener";
  }

});

document.querySelectorAll(".js-address").forEach(el => {
  el.textContent = SITE_ADDRESS;
});


/* ========================================
   WHATSAPP HELPER
======================================== */

function openWhatsApp(message) {

  const url =
    "https://wa.me/" +
    SITE_PHONE +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");

}


/* ========================================
   CUSTOM CAKE ORDER FORM
======================================== */

const orderForm = document.getElementById("order-form");

if (orderForm) {

  orderForm.addEventListener("submit", function(e) {

    e.preventDefault();

    if (!orderForm.reportValidity()) return;

    const data = new FormData(orderForm);

    const fields = [
      ["name", "Name"],
      ["phone", "Contact number"],
      ["date", "Celebration date"],
      ["occasion", "Occasion"],
      ["servings", "Number of servings"],
      ["flavour", "Preferred flavour"],
      ["theme", "Theme / design"],
      ["budget", "Approximate budget"],
      ["inspiration", "Inspiration"]
    ];

    let message =
      "Hello Minaxi Cake House!\n\n" +
      "I would like to place a custom cake order.\n\n";

    fields.forEach(([key, label]) => {

      const value = (data.get(key) || "")
        .toString()
        .trim();

      if (value) {
        message += label + ": " + value + "\n";
      }

    });

    message += "\nThank you!";

    openWhatsApp(message);

  });

}


/* ========================================
   CONTACT US INQUIRY FORM
======================================== */

const contactForm =
  document.getElementById("contact-inquiry-form");

if (contactForm) {

  contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);

    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const inquiry = (data.get("inquiry") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const whatsappMessage =
`Hello Minaxi Cake House!

I would like to make an enquiry.

Customer Name: ${name}
Customer Phone: ${phone}
Inquiry Type: ${inquiry}

Message:
${message}

Thank you!`;

    openWhatsApp(whatsappMessage);

  });

}


/* ========================================
   DIRECT WHATSAPP BUTTONS
======================================== */

document.querySelectorAll(".js-whatsapp").forEach(button => {

  button.addEventListener("click", function(e) {

    e.preventDefault();

    openWhatsApp(
      "Hello Minaxi Cake House! I would like to know more about your cakes."
    );

  });

});


/* ========================================
   INSTAGRAM BUTTONS
======================================== */

document.querySelectorAll(".js-instagram").forEach(button => {

  button.href = SITE_INSTAGRAM;
  button.target = "_blank";
  button.rel = "noopener";

});


/* ========================================
   OUR CAKES CATEGORY FILTER
======================================== */

document.querySelectorAll(".filter").forEach