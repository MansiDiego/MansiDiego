// --- Lógica de Estilo: Ekko Mode (Cyberpunk) vs ProjectMaria (Minimalist) ---

// 1. Referencias a elementos
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const iconSpan = darkModeToggle.querySelector('.material-symbols-outlined');

// 2. Inicialización: Arrancamos en dark-mode (Ekko) por defecto si no hay nada guardado
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