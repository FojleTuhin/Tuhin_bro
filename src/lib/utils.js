export const initCursor = () => {
  const cursor = document.getElementById("cursor");
  const livePreview = document.getElementById("livePreview");
  if (!cursor || !livePreview) return;

  let mouseMoved = false;

  // Cursor movement logic
  document.addEventListener("mousemove", (e) => {
    mouseMoved = true;
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    if (livePreview.style.display === "block") {
      requestAnimationFrame(() => {
        livePreview.style.left = `${e.clientX}px`;
        livePreview.style.top = `${e.clientY}px`;
      });
    }
  });

  // Elements that will trigger the large cursor
  const hoverElements = document.querySelectorAll(
    ".hover-large"
  );

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("large");
    });

    element.addEventListener("mouseleave", () => {
      if (mouseMoved) {
        cursor.classList.remove("large");
      }
    });
  });

  // Live preview show/hide on projects-id hover and hide cursor
  const projects = document.querySelectorAll(".projects-id");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      livePreview.style.display = "block";
      livePreview.classList.add("large");
      cursor.style.opacity = "0"; // Hide cursor
    });

    project.addEventListener("mouseleave", () => {
      livePreview.style.display = "none";
      cursor.style.opacity = "1"; // Show cursor back
      livePreview.classList.remove("large");
    });
  });
};
