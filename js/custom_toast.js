// Obtén el formulario y el Toast
const form = document.getElementById("idForm");
const toastElement = document.querySelector(".toast");

// Crea un objeto Toast de Bootstrap
const toast = new bootstrap.Toast(toastElement);

// Añadir un evento al formulario para cuando se envíe
form.addEventListener("submit", function (event) {
  // Muestra el Toast cuando el formulario se envíe
  toast.show();
});
