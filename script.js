/* Portfolio Website - JavaScript
   Abdalatif Zidan

   Everything interactive on the page is in this file:
   1. the mobile menu button
   2. the dark / light theme switch (it remembers your choice)
   3. the project filter buttons
   4. the contact form validation
   5. the back to top button + highlighting the nav link you're on
   6. the year in the footer
*/


/* ---------- 1. MOBILE MENU ---------- */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// clicking the hamburger opens or closes the list of links
menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// after you tap a link on a phone, close the menu again
const navAnchors = document.querySelectorAll("#nav-links a");

navAnchors.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});


/* ---------- 2. DARK / LIGHT THEME ---------- */

const themeBtn = document.getElementById("theme-btn");

// localStorage saves things in the browser, so if you picked dark mode
// last time you were here it will still be dark when you come back
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // swap the little icon and remember what was picked
  themeBtn.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


/* ---------- 3. PROJECT FILTER BUTTONS ---------- */

const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll("#project-grid .card");
const countText = document.getElementById("filter-count");

// show only the cards that have the tag we asked for
function filterCards(tag) {
  let shown = 0;

  cards.forEach(function (card) {
    const tags = card.getAttribute("data-tags");

    if (tag === "all" || tags.split(" ").includes(tag)) {
      card.classList.remove("hidden");
      shown++;
    } else {
      card.classList.add("hidden");
    }
  });

  countText.textContent = "Showing " + shown + " of " + cards.length + " projects";
}

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // only one button should look selected at a time
    filterBtns.forEach(function (other) {
      other.classList.remove("active");
    });
    btn.classList.add("active");

    filterCards(btn.getAttribute("data-filter"));
  });
});

// start off showing every project
filterCards("all");


/* ---------- 4. CONTACT FORM VALIDATION ---------- */

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// puts a red message under one of the boxes (empty string clears it)
function setError(field, message) {
  document.getElementById(field + "-error").textContent = message;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // clear whatever was showing from last time
  setError("name", "");
  setError("email", "");
  setError("message", "");
  formStatus.textContent = "";

  let isValid = true;

  if (name === "") {
    setError("name", "Please enter your name.");
    isValid = false;
  }

  if (email === "") {
    setError("email", "Please enter your email.");
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    setError("email", "That doesn't look like a real email address.");
    isValid = false;
  }

  if (message === "") {
    setError("message", "Please write a message.");
    isValid = false;
  } else if (message.length < 10) {
    setError("message", "Your message is a bit short, write at least 10 characters.");
    isValid = false;
  }

  if (isValid) {
    // there is no server on GitHub Pages, so this just says thank you
    formStatus.textContent = "Thanks " + name + "! Your message has been sent.";
    formStatus.className = "status-ok";
    form.reset();
  } else {
    formStatus.textContent = "Please fix the errors above and try again.";
    formStatus.className = "status-bad";
  }
});


/* ---------- 5. BACK TO TOP + CURRENT NAV LINK ---------- */

const topBtn = document.getElementById("top-btn");
const sections = document.querySelectorAll("header#home, main section");

// figures out which section is on the screen and underlines that nav link
function highlightNav() {
  let currentId = "";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) {
      currentId = section.id;
    }
  });

  // if you're all the way at the bottom, always light up the last section.
  // without this the last one never gets highlighted, because the page
  // runs out of room to scroll before it reaches the top of the screen
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

  if (atBottom) {
    currentId = sections[sections.length - 1].id;
  }

  navAnchors.forEach(function (link) {
    if (link.getAttribute("href") === "#" + currentId) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
}

window.addEventListener("scroll", function () {
  // only show the arrow once you've scrolled down a bit
  if (window.scrollY > 300) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

  highlightNav();
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

highlightNav();


/* ---------- 6. FOOTER YEAR ---------- */

// so I don't have to come back and change it every January
document.getElementById("year").textContent = new Date().getFullYear();
