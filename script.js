document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ MÓVIL ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 2. NAVBAR GLASSMORPHISM AL SCROLL ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. ANIMACIONES AL SCROLL (INTERSECTION OBSERVER) ---
    // Esto hace que los elementos aparezcan suavemente cuando bajas
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- 4. LÓGICA DEL MODAL ---
    const modal = document.getElementById("projectModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeSpan = document.querySelector(".close-modal");
    const closeFooterBtn = document.getElementById("closeModalBtnFooter");

    const openModal = () => {
        modal.style.display = "flex"; // Usamos flex para centrar
        document.body.style.overflow = "hidden"; // Bloquear scroll
    };

    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Habilitar scroll
    };

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeSpan) closeSpan.addEventListener('click', closeModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);

    // Cerrar clickeando afuera
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });
});