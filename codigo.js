// 1. Referencias a elementos
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const iconSpan = darkModeToggle.querySelector('.material-symbols-outlined');

// 2. Inicialización: Arrancamos en dark-mode por defecto si no hay nada guardado
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);
updateIcon(currentTheme === 'dark-mode');

// 3. Evento de click para cambiar el tema
darkModeToggle.addEventListener('click', () => {
    // Alternamos la clase
    body.classList.toggle('dark-mode');
    
    // Verificamos el estado actual para guardar y actualizar icono
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Guardamos la preferencia
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    
    // Cambiamos el icono
    updateIcon(isDarkMode);
});

// 4. Función única para actualizar el icono
function updateIcon(isDarkMode) {
    // Si estoy en oscuro, el icono debe ser el de "sol" para cambiar a claro
    // Si estoy en claro, el icono debe ser el de "luna" para cambiar a oscuro
    iconSpan.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
}



document.addEventListener("DOMContentLoaded", () => {
    // --- Lógica del Carrusel existente ---
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('next-btn');
    const prevButton = document.getElementById('prev-btn');

    let currentIndex = 0;

    const moveCarousel = (index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Bucle: vuelve a la primera certificación
        }
        moveCarousel(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Bucle: va a la última certificación
        }
        moveCarousel(currentIndex);
    });

    window.addEventListener('resize', () => {
        moveCarousel(currentIndex);
    });

    // ---Lógica para ampliar la imagen (Modal) ---
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
});