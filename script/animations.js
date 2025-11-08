// --- Función para mostrar notificaciones ---
function showNotification(message, type = 'success') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `nexus-toast ${type}`; // 'success' o 'error'
    toast.textContent = message;

    container.appendChild(toast);

    // Animar entrada
    setTimeout(() => {
        toast.classList.add('show');
    }, 100); // Pequeño retardo para que la animación funcione

    // Ocultar y eliminar después de 3 segundos
    setTimeout(() => {
        toast.classList.remove('show');
        
        // Eliminar el elemento del DOM después de que la animación de salida termine
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 3000);
}


// --- Lógica principal al cargar la página ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- (Tu código GSAP existente para animaciones de página) ---
    const docElementsToAnimate = gsap.utils.toArray(
        '.content-wrapper .back-button, .content-wrapper .toc, .content-wrapper h1, .content-wrapper h2, .content-wrapper h3, .content-wrapper h4, .content-wrapper h5, .content-wrapper hr, .content-wrapper table, .content-wrapper .contact-form, ' +
        '.uml-page-wrapper .back-button, .uml-page-wrapper h1, .uml-page-wrapper .uml-documentation, .uml-page-wrapper .uml-diagram-container, ' +
        '.content-wrapper .section-title, .content-wrapper .interactive-features, .content-wrapper .figma-embed-container'
    );

    if (docElementsToAnimate.length > 0) {
        gsap.from(docElementsToAnimate, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'back.out(1.4)',
            stagger: 0.07,
            clearProps: "all"
        });
    }

    const menuElementsToAnimate = gsap.utils.toArray(
        '.menu-container .back-button, .menu-container h1, .menu-subtitle, .menu-button, .menu-container hr, .menu-container h2, .menu-container .form-intro, .contact-form'
    );

     if (menuElementsToAnimate.length > 0 && document.querySelector('.menu-container')) { 
        gsap.from(menuElementsToAnimate, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'back.out(1.4)',
            stagger: 0.08, 
            clearProps: "all"
        });
    }


    // --- NUEVA LÓGICA PARA EL FORMULARIO DE CONTACTO ---
    const contactForm = document.querySelector('.contact-form');
    
    // Asegurarnos de que el formulario existe en esta página
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const submitButtonSpan = submitButton.querySelector('span');
        const originalButtonText = submitButtonSpan.textContent;

        contactForm.addEventListener('submit', function(e) {
            // Prevenir la recarga de la página
            e.preventDefault();

            // Deshabilitar el botón y mostrar "Enviando..."
            submitButton.disabled = true;
            submitButtonSpan.textContent = 'Enviando...';

            const formData = new FormData(contactForm);
            
            // Enviar los datos a Formspree usando fetch
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Si el envío fue exitoso
                    showNotification('¡Mensaje enviado con éxito!');
                    contactForm.reset(); // Limpiar el formulario
                } else {
                    // Si Formspree da un error
                    response.json().then(data => {
                        let errorMsg = data.errors ? data.errors.map(err => err.message).join(', ') : 'Error al enviar.';
                        showNotification(`Error: ${errorMsg}`, 'error');
                    });
                }
            })
            .catch(error => {
                // Si hay un error de red
                showNotification('Error de red. Inténtalo de nuevo.', 'error');
            })
            .finally(() => {
                // Reactivar el botón
                submitButton.disabled = false;
                submitButtonSpan.textContent = originalButtonText;
            });
        });
    }
});