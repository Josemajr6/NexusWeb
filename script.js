// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    const slogan = ".slogan-container";

    // Animación de entrada para que aparezca todo el contenido
    gsap.from(slogan, {
        duration: 1.5,
        opacity: 0,
        y: 20,
        ease: "power2.out"
    });

    // Animación de flotación orgánica y continua
    
    // Movimiento vertical (Y)
    gsap.to(slogan, {
        y: -10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5 // Empieza después de la animación de entrada
    });

    // Movimiento horizontal (X)
    gsap.to(slogan, {
        x: 8,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
    });

    // Rotación sutil
    gsap.to(slogan, {
        rotation: 0.5,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
    });

});
