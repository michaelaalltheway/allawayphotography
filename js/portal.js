// ===================================
// Allaway Photography - Client Portal
// ===================================

// Client Gallery Data Structure
// In production, this would come from a backend/database
const clientGalleries = {
    'DEMO2025': {
        name: 'Demo Gallery',
        client: 'Demo Client',
        date: '2025-01-15',
        sessionType: 'Wedding',
        images: [
            { src: 'images/galleries/demo/1.jpg', filename: 'wedding-001.jpg' },
            { src: 'images/galleries/demo/2.jpg', filename: 'wedding-002.jpg' },
            { src: 'images/galleries/demo/3.jpg', filename: 'wedding-003.jpg' }
        ],
        expiryDate: '2025-03-15'
    },
    'TEST123': {
        name: 'Test Gallery',
        client: 'Test Client',
        date: '2025-01-10',
        sessionType: 'Family Portrait',
        images: [
            { src: 'images/galleries/test/1.jpg', filename: 'family-001.jpg' },
            { src: 'images/galleries/test/2.jpg', filename: 'family-002.jpg' }
        ],
        expiryDate: '2025-03-10'
    }
};

// Portal Login Form
const portalLoginForm = document.getElementById('portalLoginForm');
const portalMessage = document.getElementById('portalMessage');
const galleriesList = document.getElementById('galleriesList');
const galleriesContainer = document.getElementById('galleriesContainer');

// Check if user is already logged in (stored in sessionStorage)
const checkExistingSession = () => {
    const loggedInCode = sessionStorage.getItem('galleryAccessCode');
    if (loggedInCode && clientGalleries[loggedInCode]) {
        showGallery(loggedInCode);
    }
};

if (portalLoginForm) {
    portalLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const galleryCode = document.getElementById('galleryCode').value.trim().toUpperCase();

        // Validate gallery code
        if (clientGalleries[galleryCode]) {
            // Store in session
            sessionStorage.setItem('galleryAccessCode', galleryCode);

            // Show success message
            portalMessage.textContent = 'Access granted! Loading your gallery...';
            portalMessage.className = 'form-message success';

            // Show gallery after short delay
            setTimeout(() => {
                showGallery(galleryCode);
            }, 1000);

        } else {
            // Show error message
            portalMessage.textContent = 'Invalid access code. Please check your code and try again.';
            portalMessage.className = 'form-message error';
        }
    });
}

// Show Gallery Function
const showGallery = (code) => {
    const gallery = clientGalleries[code];

    // Hide login form
    const loginWrapper = document.querySelector('.portal-login-wrapper');
    if (loginWrapper) {
        loginWrapper.style.display = 'none';
    }

    // Show galleries list
    if (galleriesList) {
        galleriesList.style.display = 'block';
    }

    // Clear existing content
    if (galleriesContainer) {
        galleriesContainer.innerHTML = '';
    }

    // Create gallery view
    const galleryView = createGalleryView(gallery, code);
    galleriesContainer.appendChild(galleryView);

    // Scroll to gallery
    galleriesList.scrollIntoView({ behavior: 'smooth' });
};

// Create Gallery View
const createGalleryView = (gallery, code) => {
    const galleryElement = document.createElement('div');
    galleryElement.className = 'client-gallery-view';
    galleryElement.style.width = '100%';

    // Calculate days until expiry
    const expiryDate = new Date(gallery.expiryDate);
    const today = new Date();
    const daysRemaining = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));

    galleryElement.innerHTML = `
        <div style="background-color: var(--bg-light); padding: 2rem; border-radius: 8px; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">${gallery.name}</h2>
                    <p style="color: var(--text-light); margin-bottom: 0.5rem;">
                        <strong>Client:</strong> ${gallery.client}<br>
                        <strong>Session Type:</strong> ${gallery.sessionType}<br>
                        <strong>Date:</strong> ${new Date(gallery.date).toLocaleDateString()}<br>
                        <strong>Total Photos:</strong> ${gallery.images.length}
                    </p>
                    ${daysRemaining > 0 ?
                        `<p style="color: ${daysRemaining <= 7 ? '#dc3545' : 'var(--secondary-color)'}; font-weight: 500;">
                            Gallery expires in ${daysRemaining} days
                        </p>` :
                        `<p style="color: #dc3545; font-weight: 500;">This gallery has expired</p>`
                    }
                </div>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button onclick="downloadAllImages('${code}')" class="btn btn-primary">
                        Download All
                    </button>
                    <button onclick="logoutPortal()" class="btn btn-secondary" style="color: var(--text-dark); border-color: var(--text-dark);">
                        Logout
                    </button>
                </div>
            </div>
        </div>

        <div class="client-gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
            ${gallery.images.map((img, index) => `
                <div class="client-gallery-item" style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: var(--shadow-sm); aspect-ratio: 4/3;">
                    <img src="${img.src}" alt="${img.filename}"
                         style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;"
                         onclick="openClientLightbox(${index}, '${code}')"
                         onerror="this.src='${createPlaceholderImage()}'">
                    <div class="client-image-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 1rem; opacity: 0; transition: opacity 0.3s;">
                        <button onclick="downloadImage('${img.src}', '${img.filename}')"
                                class="btn btn-light"
                                style="padding: 8px 16px; font-size: 0.9rem;">
                            Download
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Add hover effect to gallery items
    setTimeout(() => {
        const items = galleryElement.querySelectorAll('.client-gallery-item');
        items.forEach(item => {
            const overlay = item.querySelector('.client-image-overlay');
            item.addEventListener('mouseenter', () => {
                overlay.style.opacity = '1';
            });
            item.addEventListener('mouseleave', () => {
                overlay.style.opacity = '0';
            });
        });
    }, 100);

    return galleryElement;
};

// Client Lightbox
let currentClientImageIndex = 0;
let currentClientCode = '';

window.openClientLightbox = (index, code) => {
    currentClientImageIndex = index;
    currentClientCode = code;

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    const gallery = clientGalleries[code];
    const image = gallery.images[index];

    lightboxImg.src = image.src;
    lightboxCaption.textContent = `${image.filename} (${index + 1} of ${gallery.images.length})`;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
};

// Download Single Image
window.downloadImage = async (imageUrl, filename) => {
    try {
        // In production, you'd fetch from your server
        // For now, create a download link
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showNotification('Download started!', 'success');
    } catch (error) {
        showNotification('Download failed. Please try again.', 'error');
        console.error('Download error:', error);
    }
};

// Download All Images
window.downloadAllImages = async (code) => {
    const gallery = clientGalleries[code];

    showNotification(`Preparing ${gallery.images.length} images for download...`, 'success');

    // In production, you'd create a zip file on the server and download it
    // For now, download images one by one with delay
    for (let i = 0; i < gallery.images.length; i++) {
        setTimeout(() => {
            downloadImage(gallery.images[i].src, gallery.images[i].filename);
        }, i * 500); // Stagger downloads
    }
};

// Logout Function
window.logoutPortal = () => {
    sessionStorage.removeItem('galleryAccessCode');
    location.reload();
};

// Show Notification
const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `form-message ${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.zIndex = '2000';
    notification.style.minWidth = '300px';
    notification.style.boxShadow = 'var(--shadow-lg)';

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
};

// Create Placeholder Image (same as main.js)
const createPlaceholderImage = () => {
    return 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8b7355;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#d4af76;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#grad)"/>
            <text x="50%" y="50%" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dominant-baseline="middle">
                Photo Coming Soon
            </text>
        </svg>
    `);
};

// Check for existing session on page load
document.addEventListener('DOMContentLoaded', () => {
    checkExistingSession();
});

// Instructions for Admin to Add New Galleries
console.log('%cAdmin Instructions:', 'font-size: 16px; font-weight: bold; color: #8b7355;');
console.log('To add a new client gallery, add an entry to the clientGalleries object in js/portal.js');
console.log('Example:');
console.log(`
'CLIENT123': {
    name: 'John & Jane Wedding',
    client: 'John & Jane Doe',
    date: '2025-02-14',
    sessionType: 'Wedding',
    images: [
        { src: 'images/galleries/client123/1.jpg', filename: 'wedding-001.jpg' },
        { src: 'images/galleries/client123/2.jpg', filename: 'wedding-002.jpg' }
    ],
    expiryDate: '2025-04-14'
}
`);
console.log('Then create the directory and add images: images/galleries/client123/');
