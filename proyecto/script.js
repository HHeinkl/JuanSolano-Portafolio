document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del Menú Móvil
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if(menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            // En pantallas pequeñas, alternamos la visualización
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
                navMenu.style.padding = '1rem';
            }
        });
    }

    // 2. Animaciones al hacer Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez animado
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos a animar
    const animatedElements = document.querySelectorAll('.fade-in, .stagger-item');
    animatedElements.forEach(el => observer.observe(el));
});