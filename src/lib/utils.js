export const initCursor = () => {
  const cursor = document.getElementById("cursor");
  const seeLive = cursor.querySelector(".seeLive");  // Select the 'SEE LIVE' text

  if (!cursor || !seeLive) return; // Ensure both cursor and seeLive exist

  let mouseMoved = false;
  seeLive.style.opacity = "0";
  document.addEventListener("mousemove", (e) => {
    mouseMoved = true;
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });

  // Hover logic to enlarge the cursor
  const hoverElements = document.querySelectorAll(".hover-large");
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

  // Show 'SEE LIVE' text only on projects-id hover
  const projects = document.querySelectorAll(".projects-id");
  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      // Show the 'SEE LIVE' text by changing opacity to 1
      seeLive.style.opacity = "1";
      cursor.classList.add("medium");
    });

    project.addEventListener("mouseleave", () => {
      // Hide the 'SEE LIVE' text by changing opacity back to 0
      seeLive.style.opacity = "0";
      cursor.classList.remove("medium");
    });
  });
};
