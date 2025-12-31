// ===================================
// Allaway Photography - Main JavaScript
// ===================================

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let currentImageIndex = 0;
let imageElements = [];

// Initialize lightbox for gallery and portfolio items
const initializeLightbox = () => {
    imageElements = Array.from(document.querySelectorAll('.gallery-item img, .portfolio-item img'));

    imageElements.forEach((img, index) => {
        img.parentElement.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(index);
        });
    });
};

const openLightbox = (index) => {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
};

const updateLightboxImage = () => {
    if (imageElements.length === 0) return;

    const currentImg = imageElements[currentImageIndex];
    lightboxImg.src = currentImg.src;
    lightboxImg.alt = currentImg.alt;

    // Get caption from parent overlay if it exists
    const overlay = currentImg.parentElement.querySelector('.gallery-overlay, .portfolio-overlay');
    if (overlay) {
        const title = overlay.querySelector('h3')?.textContent || '';
        const subtitle = overlay.querySelector('p')?.textContent || '';
        lightboxCaption.textContent = title + (subtitle ? ' - ' + subtitle : '');
    } else {
        lightboxCaption.textContent = currentImg.alt;
    }
};

const showPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + imageElements.length) % imageElements.length;
    updateLightboxImage();
};

const showNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % imageElements.length;
    updateLightboxImage();
};

// Lightbox event listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

if (lightbox) {
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLightbox();
});

// Contact Form Handling (Netlify Forms with AJAX)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Submit to Netlify Forms using fetch
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                // Show success message
                formMessage.textContent = 'Thank you for your inquiry! We\'ll get back to you within 24-48 hours.';
                formMessage.className = 'form-message success';

                // Reset form
                contactForm.reset();

                // Hide message after 8 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 8000);
            } else {
                throw new Error('Form submission failed');
            }

        } catch (error) {
            // Show error message
            formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or email us directly at allawayphotography@gmail.com';
            formMessage.className = 'form-message error';
            console.error('Form submission error:', error);
        } finally {
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Placeholder Image Handling
// This creates placeholder images for gallery items that don't have images yet
const createPlaceholderImage = (element, text = 'Photo Coming Soon') => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#8b7355');
    gradient.addColorStop(1, '#d4af76');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);

    // Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 400, 300);

    return canvas.toDataURL();
};

// Add placeholders for images that fail to load
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (!this.src.startsWith('data:')) {
                this.src = createPlaceholderImage(this, 'Photo Coming Soon');
            }
        });
    });
});

// Animation on Scroll
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe sections for fade-in animation
    const animatedElements = document.querySelectorAll('.service-card, .testimonial-card, .value-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);

// Form Validation Helper
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Add real-time validation to email field
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '';
        }
    });
}

console.log('Allaway Photography website loaded successfully!');
