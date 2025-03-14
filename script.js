if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://secretcodeapp.github.io/miApp/service-worker.js')
        .then(() => console.log('Service Worker registrado'))
        .catch((err) => console.error('Error al registrar Service Worker:', err));
}

let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
                console.log('Usuario instaló la PWA');
            }
            deferredPrompt = null;
            installButton.style.display = 'none';
        });
    });
});

