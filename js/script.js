// Set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const options = { root: null, threshold: 0, rootMargin: "-80px" };
const stick = (entry) => {
  if (!entry.isIntersecting) document.body.classList.add("sticky");
  else document.body.classList.remove("sticky");
};

const obs = new IntersectionObserver(([entry]) => stick(entry), options);
obs.observe(sectionHeroEl);
