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

    // Simulación de envío de formulario
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        alert('¡Gracias Gian Carlo! (Este es un demo). Aquí conectarías tu servicio de email.');
        form.reset();
    });
});