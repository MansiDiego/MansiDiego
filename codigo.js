// --- Referencias a elementos del header ---
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const iconSpan = darkModeToggle.querySelector('.material-symbols-outlined');

// --- Inicialización: Arrancamos en dark-mode (observatorio) por defecto si no hay preferencia guardada ---
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);
updateIcon(currentTheme === 'dark-mode');

// --- Evento de click para cambiar el tema ---
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    updateIcon(isDarkMode);
});

// --- Función única para actualizar el icono del modo oscuro ---
function updateIcon(isDarkMode) {
    // Si estoy en oscuro, el icono debe ser el de "sol" para cambiar a claro
    // Si estoy en claro, el icono debe ser el de "luna" para cambiar a oscuro
    iconSpan.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
}

// --- Utilidad genérica: inicializar un carrusel ---
function initCarousel(trackSelector, prevId, nextId) {
    const track = document.querySelector(trackSelector);
    if (!track) return;
    const slides = Array.from(track.children);
    const nextButton = document.getElementById(nextId);
    const prevButton = document.getElementById(prevId);
    if (!nextButton || !prevButton) return;

    let currentIndex = 0;

    const moveCarousel = (index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    // Siguiente / Bucle: vuelve a la primera diapositiva
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        moveCarousel(currentIndex);
    });

    // Anterior / Bucle: va a la última diapositiva
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        moveCarousel(currentIndex);
    });

    // Recalcula el ancho al redimensionar la ventana
    window.addEventListener('resize', () => moveCarousel(currentIndex));
}

document.addEventListener("DOMContentLoaded", () => {
    // --- Cálculo dinámico de edad (birthDate: 20/04/2004) ---
    const birthDate = new Date(2004, 3, 20);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    const ageElement = document.getElementById('age');
    if (ageElement) {
        ageElement.textContent = age;
    }

    // --- Carrusel de certificaciones (las fotos ya no son carrusel) ---
    initCarousel('#certificaciones-track', 'prev-btn', 'next-btn');

    // --- Ampliar imagen de certificaciones (modal) ---
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById("modal-image");
    const expandableImgs = document.querySelectorAll('.expandable-cert');
    const closeBtn = document.querySelector('.close-modal');

    // Abre el modal al hacer clic en una imagen
    expandableImgs.forEach(img => {
        img.onclick = function(){
            modal.style.display = "flex";
            modalImg.src = this.src; // Usa la misma fuente para la versión ampliada
        }
    });

    // Cierra el modal al hacer clic en la X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Cierra el modal al hacer clic en el fondo oscuro
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // --- Abrir modal con click derecho en las fotos de "Sobre mi" ---
    // Reutilizamos #cert-modal para mantener el mismo tamaño de visualización
    const fotosGrid = document.querySelectorAll('.fotito');
    fotosGrid.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault(); // evita el menú nativo para abrir directamente el modal
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });
});
