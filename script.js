const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector("#contact-form");

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 24), { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
  const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
  window.location.href = `mailto:nashalmeida27@gmail.com?subject=${subject}&body=${body}`;
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  }
}), { threshold: .12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
