export const initCursor = () => {
  const cursor = document.getElementById("cursor");
  if (!cursor) return;

  let mouseMoved = false;
  
  document.addEventListener("mousemove", (e) => {
    mouseMoved = true;
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });

  const hoverElements = document.querySelectorAll(".cursorPointer, #cursorPointer, .hover-large");

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
};
