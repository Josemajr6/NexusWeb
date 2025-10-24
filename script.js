// Selecciona el contenedor del eslogan
const slogan = ".slogan-container";

// Movimiento vertical (Y)
gsap.to(slogan, {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Movimiento horizontal (X) - con una duración diferente
gsap.to(slogan, {
    x: 10,
    duration: 5, // Duración distinta para desincronizar
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

// Rotación sutil - con otra duración
gsap.to(slogan, {
    rotation: 1, // Solo 1 grado de rotación
    duration: 7, // Duración aún más larga
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

