console.warn('Limpiando Service Worker residual de proyecto anterior...');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const r of registrations) {
      r.unregister();
    }
  });
}

if ('caches' in window) {
  caches.keys().then((names) => {
    for (const name of names) {
      caches.delete(name);
    }
  });
}

if (!sessionStorage.getItem('__sw_cleaned')) {
  sessionStorage.setItem('__sw_cleaned', '1');
  setTimeout(() => {
    window.location.reload();
  }, 200);
}
