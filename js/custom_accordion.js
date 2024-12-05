document.querySelectorAll(".accordion-item").forEach((item) => {
  const button = item.querySelector(".accordion-button");
  const icon = button.querySelector(".accordion-icon");

  // Escucha los eventos de colapso y expansión
  const collapseElement = item.querySelector(".accordion-collapse");

  collapseElement.addEventListener("show.bs.collapse", () => {
    icon.textContent = "-"; // Cambiar a "-" al expandirse
    document.querySelectorAll(".accordion-icon").forEach((otherIcon) => {
      if (otherIcon !== icon) {
        otherIcon.textContent = "+"; // Cambiar todos los demás a "+"
      }
    });
  });

  collapseElement.addEventListener("hide.bs.collapse", () => {
    icon.textContent = "+"; // Cambiar a "+" al colapsar
  });
});
