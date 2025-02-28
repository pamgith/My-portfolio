document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });

  const thumbnails = document.querySelectorAll(".testimony-selector");
  const slides = document.querySelectorAll(".slide");
  let activeThumbnail = null; // Variable to keep track of the currently active thumbnail

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const testimonyId = this.getAttribute("data-testimony");
      const activeSlide = document.querySelector(".slide.active");

      // Check if the clicked thumbnail corresponds to the currently active slide
      if (
        activeSlide &&
        activeSlide.getAttribute("data-testimony") === testimonyId
      ) {
        return; // Do nothing if the clicked thumbnail is already active
      }

      // Remove transform and active class from all thumbnails
      thumbnails.forEach((thumb) => {
        thumb.style.transform = "none";
        thumb.classList.remove("active-thumbnail");
      });

      // Add transform and active class to the newly clicked thumbnail
      this.style.transform = "translateY(-1.5rem)";
      this.classList.add("active-thumbnail");
      activeThumbnail = this; // Update the active thumbnail

      slides.forEach((slide) => {
        if (slide.classList.contains("active")) {
          slide.classList.add("exit-left");
          setTimeout(() => {
            slide.classList.remove("active");
            slide.classList.remove("exit-left");
          }, 400); // Match the duration of the CSS transition
        } else {
          slide.classList.remove("active");
        }
      });

      document
        .querySelector(`.slide[data-testimony="${testimonyId}"]`)
        .classList.add("active");
    });
  });
});
