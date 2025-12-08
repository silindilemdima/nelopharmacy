// main.js — For Nelo Pharmacy website
// This file handles the mobile navbar toggle + menu behavior.

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  // Make sure elements exist
  if (!navToggle || !navMenu) {
    console.warn("Navbar toggle or menu not found in DOM.");
    return;
  }

  // Handle opening/closing of mobile navbar
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active"); // show/hide links
    navToggle.classList.toggle("open"); // animate hamburger
  });

  // Close menu when clicking any navigation link
  const navLinks = navMenu.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("open");
    });
  });
});
