document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");
  const menuLinks = document.querySelectorAll(".menu-link");

  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });

  window.addEventListener("click", (event) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(event.target) &&
      !mobileToggle.contains(event.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });

  mobileMenu.addEventListener("click", (event) => {
    event.stopPropagation(); 
  });
});


// Slider


