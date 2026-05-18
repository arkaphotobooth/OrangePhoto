// File ini wajib ada agar Chrome Android mengizinkan instalasi PWA (Fullscreen).
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Orange Receipt Terinstal');
});

self.addEventListener('fetch', (e) => {
    // Biarkan kosong, kita tidak butuh fitur offline yang rumit.
});