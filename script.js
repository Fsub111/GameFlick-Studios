// Gallery initialization
const gallery = document.getElementById('gallery');

// Placeholder wallpapers (adjust paths if needed)
const wallpaperCount = 110; // Number of wallpapers
const wallpapers = Array.from({ length: wallpaperCount }, (_, i) => `wallpapers/wallpaper${i + 1}.jpg`);

// Dynamically load wallpapers
wallpapers.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Wallpaper';
    img.addEventListener('click', () => openPreview(src));
    gallery.appendChild(img);
});

// Open preview in a new window
function openPreview(src) {
    const previewUrl = `preview.html?src=${encodeURIComponent(src)}`;
    window.open(previewUrl, '_blank');
}
