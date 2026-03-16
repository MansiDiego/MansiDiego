// --- Lógica del Modo Oscuro ---

// 1. Obtener referencias a elementos clave
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const iconSpan = darkModeToggle.querySelector('.material-symbols-outlined');

// 2. Comprobar si hay un tema guardado en localStorage al cargar la página
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    updateIcon(currentTheme === 'dark-mode');
}

// 3. Escuchar el evento de clic en el botón de cambio
darkModeToggle.addEventListener('click', () => {
    // Alternar la clase .dark-mode en el cuerpo
    body.classList.toggle('dark-mode');
    
    // Comprobar qué modo está activo actualmente
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Actualizar el icono y guardar la preferencia
    updateIcon(isDarkMode);
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme'); // Volver al tema predeterminado
    }
});

// 4. Función auxiliar para actualizar el icono
function updateIcon(isDarkMode) {
    if (isDarkMode) {
        iconSpan.textContent = 'dark_mode'; // Icono de luna
    } else {
        iconSpan.textContent = 'light_mode'; // Icono de sol
    }
}