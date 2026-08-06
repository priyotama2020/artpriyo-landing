document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS Animation library
  AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    offset: 50, // offset (in px) from the original trigger point
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-cubic', // default easing for AOS animations
  });

  const scrollTopBtn = document.getElementById("scrollTopBtn");

  const handleScroll = () => {
    // Scroll to Top logic
    if (scrollTopBtn) {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once on load in case the user is already scrolled down or jumped to a hash
  handleScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Close mobile navbar on link click
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  const navbarToggler = document.querySelector('.navbar-toggler');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        // Hide the collapse via Bootstrap
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
        // Reset the toggler state for the animated hamburger
        navbarToggler.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
