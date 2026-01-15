document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa para Móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // NOTA: Se eliminó el código del formulario porque ahora el contacto es directo por botones.

    // ==========================================
    // LÓGICA DEL MODAL (VENTANA EMERGENTE)
    // ==========================================
    
    const modal = document.getElementById("projectModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeSpan = document.querySelector(".close-modal");
    const closeFooterBtn = document.getElementById("closeModalBtnFooter");

    // Abrir el modal
    openBtn.addEventListener('click', () => {
        modal.style.display = "block";
        // Deshabilitar scroll del body
        document.body.style.overflow = "hidden";
    });

    // Función para cerrar modal
    const closeModal = () => {
        modal.style.display = "none";
        // Habilitar scroll del body nuevamente
        document.body.style.overflow = "auto";
    };

    // Cerrar con la X
    closeSpan.addEventListener('click', closeModal);
    
    // Cerrar con el botón inferior
    closeFooterBtn.addEventListener('click', closeModal);

    // Cerrar haciendo click fuera del contenido del modal
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });
});