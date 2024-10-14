document.addEventListener('DOMContentLoaded', function () {
    // Adjust parallax sections on window resize
    function adjustParallax() {
      document.querySelectorAll('.parallax-container').forEach(container => {
        container.style.width = `${window.innerWidth}px`;
        container.style.height = `${window.innerHeight}px`;
      });
    }
  
    window.addEventListener('resize', adjustParallax);
    adjustParallax(); // Initial adjustment on load
  
    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
  
        // Handle only internal links (e.g., #about or /gallery)
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const target = document.getElementById(targetId);
  
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 70, // Adjust for navbar height
              behavior: 'smooth',
            });
          }
        }
      });
    });
  
    // Close mobile navbar after clicking a link
    const navbarLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle(); // Close the navbar collapse
        }
      });
    });
  });
  