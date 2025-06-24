const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("#navMenu a");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burger.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        burger.classList.remove("active");
    });

    
});

document.addEventListener("DOMContentLoaded", function () {
        const dockWrapper = document.querySelector('.footer-social-bar-wrapper');

        function toggleDockPosition() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.offsetHeight;

            const nearBottom = (scrollY + windowHeight + 20) >= bodyHeight;

            if (nearBottom) {
                dockWrapper.classList.add('at-footer');
            } else {
                dockWrapper.classList.remove('at-footer');
            }
        }

        window.addEventListener('scroll', toggleDockPosition);
        window.addEventListener('resize', toggleDockPosition);
        toggleDockPosition(); // Initial run

    });

    $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  });