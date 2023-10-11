// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el elemento astronauta
  var astronauta = document.querySelector(".astronauta");

  // Define la animación de GSAP
  var tl = gsap.timeline();

  // Define el punto de inicio (fuera del área visible a la izquierda)
  tl.from(astronauta, {
    x: "-100%",
    rotation: -180,
    duration: 2,
    ease: "power3.out",
  });

  // Selecciona los elementos con las clases 'fondo-dona1', 'fondo-dona2' y 'fondo-dona3'
  const fondoDona1 = document.querySelector(".fondo-dona1");
  const fondoDona2 = document.querySelector(".fondo-dona2");
  const fondoDona3 = document.querySelector(".fondo-dona3");

  // Guarda las posiciones originales de los elementos
  const originalPos1 = { y: fondoDona1.offsetTop };
  const originalPos2 = { y: fondoDona2.offsetTop };
  const originalPos3 = { y: fondoDona3.offsetTop };

  // Establece las posiciones iniciales de los elementos debajo de la pantalla
  gsap.set(fondoDona1, { y: window.innerHeight });
  gsap.set(fondoDona2, { y: window.innerHeight });
  gsap.set(fondoDona3, { y: window.innerHeight });

  // Crea la animación para mover los elementos a sus posiciones originales desde abajo hacia arriba
  gsap.to(fondoDona1, { y: originalPos1.y, duration: 1, ease: "power2.inOut" });
  gsap.to(fondoDona2, {
    y: originalPos2.y,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.5,
  });
  gsap.to(fondoDona3, {
    y: originalPos3.y,
    duration: 1,
    ease: "power2.inOut",
    delay: 1,
  });
});
