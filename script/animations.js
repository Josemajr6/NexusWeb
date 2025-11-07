// Animaciones GSAP para las páginas de documentación

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Animaciones para las PÁGINAS DE DOCUMENTACIÓN ---
    // (project-plan, requirements, viability-study, uml, privacy, terms, mockup)
    const docElementsToAnimate = gsap.utils.toArray(
        '.content-wrapper .back-button, .content-wrapper .toc, .content-wrapper h1, .content-wrapper h2, .content-wrapper h3, .content-wrapper h4, .content-wrapper h5, .content-wrapper hr, .content-wrapper table, .content-wrapper .contact-form, ' +
        '.uml-page-wrapper .back-button, .uml-page-wrapper h1, .uml-page-wrapper .uml-documentation, .uml-page-wrapper .uml-diagram-container, ' +
        '.content-wrapper .section-title, .content-wrapper .interactive-features, .content-wrapper .figma-embed-container' // <-- Añadido para la página de mockup
    );

    if (docElementsToAnimate.length > 0) {
        gsap.from(docElementsToAnimate, {
            opacity: 0,
            y: 30, // Un poco más de recorrido
            duration: 0.5, // Más rápido
            ease: 'back.out(1.4)', // <-- MEJORA VISUAL: Efecto "elástico"
            stagger: 0.07, // Un poco más rápido
            clearProps: "all"
        });
    }

    // --- Animaciones específicas para la PÁGINA DE MENÚ (moreinfo.html) ---
    const menuElementsToAnimate = gsap.utils.toArray(
        '.menu-container .back-button, .menu-container h1, .menu-subtitle, .menu-button, .menu-container hr, .menu-container h2, .menu-container .form-intro, .contact-form'
    );

     if (menuElementsToAnimate.length > 0 && document.querySelector('.menu-container')) { 
        gsap.from(menuElementsToAnimate, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'back.out(1.4)', // <-- MEJORA VISUAL: Efecto "elástico"
            stagger: 0.08, 
            clearProps: "all"
        });
    }

    // Nota: La animación de la página de inicio (index.html) sigue en script.js
});