// Animaciones GSAP para las páginas de documentación

document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada para elementos comunes
    const elementsToAnimate = gsap.utils.toArray('.back-button, .toc, h1, h2, h3, h4, h5, hr, table, .contact-form, .uml-diagram-container, .plantuml-diagram-image, .menu-container h1, .menu-subtitle, .menu-button');

    gsap.from(elementsToAnimate, {
        opacity: 0,
        y: 20, // Empieza un poco menos abajo
        duration: 0.4, // Duración más corta
        ease: 'power1.out', // Una aceleración un poco más rápida
        stagger: 0.05, // Retraso mucho menor entre elementos
        clearProps: "all" // Limpia las propiedades inline después de animar
    });

    // Podrías añadir animaciones más específicas aquí si lo deseas
    // Por ejemplo, animaciones al hacer scroll usando ScrollTrigger
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from(".una-seccion-especifica", {
    //     scrollTrigger: ".una-seccion-especifica", // El trigger es el propio elemento
    //     opacity: 0,
    //     x: -50,
    //     duration: 1
    // });


    // Animaciones GSAP para las páginas

document.addEventListener('DOMContentLoaded', () => {
    // --- Animaciones para las PÁGINAS DE DOCUMENTACIÓN ---
    // Selecciona elementos *dentro* de los contenedores de documentación
    const docElementsToAnimate = gsap.utils.toArray(
        '.content-wrapper .back-button, .content-wrapper .toc, .content-wrapper h1, .content-wrapper h2, .content-wrapper h3, .content-wrapper h4, .content-wrapper h5, .content-wrapper hr, .content-wrapper table, .content-wrapper .contact-form, ' +
        '.uml-page-wrapper .back-button, .uml-page-wrapper h1, .uml-page-wrapper .uml-documentation, .uml-page-wrapper .uml-diagram-container'
    );

    if (docElementsToAnimate.length > 0) {
        gsap.from(docElementsToAnimate, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power1.out',
            stagger: 0.05,
            clearProps: "all"
        });
    }

    // --- Animaciones específicas para la PÁGINA DE MENÚ (moreinfo.html) ---
    const menuElementsToAnimate = gsap.utils.toArray(
        '.menu-container .back-button, .menu-container h1, .menu-subtitle, .menu-button, .menu-container hr, .menu-container h2, .menu-container .form-intro, .contact-form'
    );

     if (menuElementsToAnimate.length > 0 && document.querySelector('.menu-container')) { // Asegura que solo se ejecute en la página de menú
        gsap.from(menuElementsToAnimate, {
            opacity: 0,
            y: 20,
            duration: 0.5, // Ligeramente más lento para el menú
            ease: 'power1.out',
            stagger: 0.08, // Un poco más escalonado
            clearProps: "all"
        });
    }

    // Nota: La animación de la página de inicio (index.html) sigue en script.js
});


});

