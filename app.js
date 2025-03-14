// Registro del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('https://secretcodeapp.github.io/miApp/service-worker.js')
            .then(registration => {
                console.log('Service Worker registrado:', registration);
            })
            .catch(error => {
                console.error('Error al registrar Service Worker:', error);
            });
    });
}

// Manejo de la instalación
let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.classList.remove('hidden');
});

installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    const result = await deferredPrompt.prompt();
    console.log(`Resultado de instalación: ${result.outcome}`);
    deferredPrompt = null;
    installButton.classList.add('hidden');
});

// Manejo del estado de conexión
function updateOnlineStatus() {
    const status = document.getElementById('connection-status');
    if (navigator.onLine) {
        status.textContent = 'Conectado';
        status.classList.remove('offline');
    } else {
        status.textContent = 'Desconectado';
        status.classList.add('offline');
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();