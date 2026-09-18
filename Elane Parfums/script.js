/* =====================================================
   ÉLANE PARFUMS PMG — SCRIPT.JS
   Beginner-friendly, commented JavaScript
   ===================================================== */

// Wait until the whole page has loaded before running any code
document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------------
     1. MOBILE NAVIGATION (hamburger menu)
     ----------------------------------------------------- */

  // Grab the hamburger button and the navigation menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');

  // When the hamburger is clicked, toggle the menu open/closed
  hamburgerBtn.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('is-open');
    hamburgerBtn.classList.toggle('is-open');

    // Update aria-expanded so screen readers know the menu state
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // When a nav link is clicked, close the mobile menu automatically
  // (so it doesn't stay open after the user jumps to a section)
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });


  /* -----------------------------------------------------
     2. FAQ ACCORDION
     ----------------------------------------------------- */

  // Grab every FAQ question button
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {

      // Find the answer that belongs to this specific question
      const answer = question.nextElementSibling;

      // Check if this FAQ item is currently open
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      // Close all FAQ answers first (so only one is open at a time)
      faqQuestions.forEach(function (otherQuestion) {
        otherQuestion.setAttribute('aria-expanded', 'false');
        otherQuestion.nextElementSibling.style.maxHeight = null;
      });

      // If the clicked item was NOT already open, open it now
      if (!isOpen) {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });


  /* -----------------------------------------------------
     3. SIMPLE SCROLL-IN ANIMATION FOR SECTIONS
     ----------------------------------------------------- */

  // Select every section that should fade in as the user scrolls to it
  const sections = document.querySelectorAll('.section');

  // Only run this if the browser supports IntersectionObserver
  // (all modern browsers do, but this keeps things safe)
  if ('IntersectionObserver' in window) {

    // Give sections a starting "hidden" state via JS-added class
    sections.forEach(function (section) {
      section.classList.add('will-fade-in');
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop watching this section once it has appeared
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15 // trigger when 15% of the section is visible
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

});