document.addEventListener('DOMContentLoaded', function() {
    const artworkItems = document.querySelectorAll('.artwork-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const closeBtn = document.querySelector('.close');

    artworkItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = img.getAttribute('data-title');
            const description = img.getAttribute('data-description');
            
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = description;
            
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    const placeholderImages = document.querySelectorAll('img[src*="placeholder"]');
    placeholderImages.forEach((img, index) => {
        img.style.background = `linear-gradient(45deg, 
            ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][index % 6]}, 
            ${['#ee5a24', '#0abde3', '#10ac84', '#5f27cd', '#00d2d3', '#ff6348'][index % 6]})`;
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.color = 'white';
        img.style.fontSize = '1.2rem';
        img.style.fontWeight = 'bold';
        img.style.textAlign = 'center';
        img.style.height = '400px';
        img.alt = `Placeholder for Artwork ${index + 1}`;
        
        img.onerror = function() {
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = `<div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎨</div>
                <div>Upload Your Art Here</div>
            </div>`;
        };
        
        img.src = '';
        img.onerror();
    });
});