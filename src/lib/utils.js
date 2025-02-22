export const initCursor = () => {
  const cursor = document.getElementById("cursor")
  if (!cursor) return

  // Basic cursor movement
  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    })
  })

  // Add hover effect for specific elements
  const hoverElements = document.querySelectorAll(".cursorPointer, #cursorPointer, .hover-large")

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("large")
    })

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("large")
    })
  })
}

