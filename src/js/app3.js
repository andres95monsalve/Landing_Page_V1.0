// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los elementos de contacto
  var contacto1 = document.querySelector(".contacto1");
  var contacto2 = document.querySelector(".contacto2");

  // Define la animación de GSAP para contacto1 y contacto2
  var tlContacto = gsap.timeline();
  // Define el punto de inicio (posición arriba del original)
  tlContacto.from(contacto1, { y: 1000, duration: 2, ease: "power3.out" });
  tlContacto.from(
    contacto2,
    { y: -1000, duration: 2, ease: "power3.out" },
    "-=2"
  );

  // Selecciona los elementos de componente y carrito
  var componente = document.querySelector(".componente");
  var carrito = document.querySelector(".carrito");

  // Define la animación de GSAP para componente y carrito
  var tlComponenteCarrito = gsap.timeline();
  // Define el punto de inicio (posición más a la derecha del original)
  tlComponenteCarrito.from(componente, {
    x: 1000,
    duration: 2,
    ease: "power3.out",
  });
  tlComponenteCarrito.from(
    carrito,
    { x: 1000, duration: 2, ease: "power3.out" },
    "-=2"
  );
});