  // Selecciona el elemento con clase dona-rosada
  const donaRosada = document.querySelector('.dona-rosada');

  // Configura la animación con GSAP
  gsap.fromTo(donaRosada, {
    rotation: 0, // Inicia con una rotación de 0 grados
    y: -100, // Mueve el elemento hacia arriba para que quede completamente fuera de la vista
    transformOrigin: 'center center' // Define el punto de origen de la rotación
  }, {
    rotation: 360, // Termina con una rotación de 180 grados
    y: 0, // Mueve el elemento de vuelta a su posición original en el eje Y
    duration: 2, // Duración de la animación en segundos
    ease: 'power2.out' // Tipo de easing para suavizar la animación
  });