'use strict';

/* =========================
   Utility Functions
========================= */

// Toggle active class
const toggleActive = (el) => el.classList.toggle("active");


/* =========================
   Sidebar Toggle (Mobile)
========================= */

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn?.addEventListener("click", () => toggleActive(sidebar));


/* =========================
   Testimonials Modal
========================= */

const testimonials = document.querySelectorAll("[data-testimonials-item]");
const modal = document.querySelector("[data-modal-container]");
const modalClose = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonials.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    toggleModal();
  });
});

modalClose?.addEventListener("click", toggleModal);
overlay?.addEventListener("click", toggleModal);


/* =========================
   Portfolio / Certificate Filter
========================= */

const selectBox = document.querySelector('[data-select]');
const selectValue = document.querySelector('[data-selecct-value]');
const selectItems = document.querySelectorAll('[data-select-item]');
const projects = document.querySelectorAll('[data-filter-item]');

selectBox?.addEventListener('click', () => toggleActive(selectBox));

selectItems.forEach(item => {
  item.addEventListener('click', () => {
    const cat = item.dataset.category;
    selectValue.textContent = item.textContent;
    selectBox.classList.remove('active');

    projects.forEach(p => {
      p.classList.toggle('active', cat === 'all' || p.dataset.category === cat);
    });
  });
});


/* =========================
   Certificate Lightbox
========================= */

// HTML must include:
// <div class="lightbox" id="lightbox"><span id="closeBtn">&times;</span><img id="lightboxImg"></div>

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

document.querySelectorAll(".open-image").forEach(img => {
  img.addEventListener("click", e => {
    e.preventDefault();
    lightbox.style.display = "flex";
    lightboxImg.src = img.dataset.img;
  });
});

closeBtn?.addEventListener("click", () => lightbox.style.display = "none");
lightbox?.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.style.display = "none";
});


/* =========================
   Page Navigation
========================= */

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.innerHTML.toLowerCase();

    pages.forEach(page => page.classList.toggle("active", page.dataset.page === target));
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");

    window.scrollTo(0, 0);
  });
});


/* =========================
   Contact Form Validation
========================= */

const form = document.querySelector("[data-form]");
const inputs = document.querySelectorAll("[data-form-input]");
const submitBtn = document.querySelector("[data-form-btn]");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    submitBtn.toggleAttribute("disabled", !form.checkValidity());
  });
});
