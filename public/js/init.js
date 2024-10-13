(function ($) {
    $(function () {
      // Initialize Sidenav
      $('.sidenav').sidenav();
  
      // Initialize Parallax
      $('.parallax').parallax();
  
      // Initialize ScrollSpy
      $('.scrollspy').scrollSpy({
        scrollOffset: 64, // Adjust to match your navbar height
      });
  
      // Smooth Scrolling with Slower Speed
      $('.scroll-link').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        e.stopPropagation(); // Stop other scroll events from triggering
  
        const targetId = $(this).attr('href').substring(1); // Get target ID
        const targetOffset = $(`#${targetId}`).offset().top - 64; // Adjust for navbar height
  
        // Stop any ongoing animations and scroll smoothly
        $('html, body').stop().animate(
          { scrollTop: targetOffset },
          2000, // Duration in milliseconds (2 seconds)
          'swing', // Easing function for smooth transition
          function () {
            console.log(`Scrolled to #${targetId} successfully.`);
          }
        );
      });
    }); // end of document ready
  })(jQuery); // end of jQuery namespace
  