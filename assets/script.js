document.getElementById("year").textContent = new Date().getFullYear();
      document.addEventListener("DOMContentLoaded", () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("#nav .nav-link");

        // 1. Standard Intersection Observer for clean scrolling detection
        const options = {
          root: null,
          rootMargin: "-30% 0px -60% 0px", // Trigger area in upper-middle screen
          threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
          // Only run this logic if we aren't resting at the very top of the page
          if (window.scrollY > 20) {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute("id");

                navLinks.forEach((link) => {
                  if (link.getAttribute("href") === `#${activeId}`) {
                    link.classList.add("active");
                  } else {
                    link.classList.remove("active");
                  }
                });
              }
            });
          }
        }, options);

        sections.forEach((section) => observer.observe(section));

        // 2. Separate scroll listener dedicated ONLY to catching the top-of-page snap
        window.addEventListener("scroll", () => {
          if (window.scrollY <= 20) {
            navLinks.forEach((link) => {
              if (link.getAttribute("href") === "#home") {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }
        });
      });