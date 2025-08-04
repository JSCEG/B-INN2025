// JavaScript para detail.html

document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que spacesData esté disponible globalmente desde data.js
    if (typeof spacesData === 'undefined') {
        console.error('spacesData no está definido. Asegúrate de que data.js se cargue antes.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const spaceId = parseInt(urlParams.get('spaceId')) || 1; // Default to first space if no ID

    const space = spacesData.find(s => s.id === spaceId);

    // Initialize modals after DOM is loaded
    initializeModals();

    if (!space) {
        console.error('Propiedad no encontrada.');
        // Use default space data for demo
        const defaultSpace = spacesData[0];
        if (defaultSpace) {
            populateSpaceData(defaultSpace);
        }
        return;
    }

    // Populate space data
    populateSpaceData(space);
});

// Function to populate space data
function populateSpaceData(space) {
    // Rellenar la información de la propiedad
    const titleElement = document.querySelector('h1');
    if (titleElement) titleElement.textContent = space.title;

    const locationElement = document.querySelector('.location');
    if (locationElement) locationElement.textContent = space.location || `Ubicación: ${space.location}`;

    const statsElement = document.querySelector('.stats');
    if (statsElement) {
        statsElement.innerHTML = `
            <span>${space.guests} huéspedes</span> &bull;
            <span>${space.bedrooms} dormitorios</span> &bull;
            <span>${space.beds} camas</span> &bull;
            <span>${space.baths} baños</span>
        `;
    }

    const hostAvatar = document.querySelector('.host-avatar');
    if (hostAvatar) hostAvatar.src = space.host_avatar;

    const hostInfo = document.querySelector('.host-info p');
    if (hostInfo) hostInfo.textContent = `Anfitrión: ${space.host}`;

    const description = document.querySelector('.description p');
    if (description) description.textContent = space.description;

    // Rellenar servicios
    const amenitiesList = document.querySelector('.amenities ul');
    if (amenitiesList) {
        amenitiesList.innerHTML = '';
        space.amenities.forEach(amenity => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="https://via.placeholder.com/20x20?text=I" alt="Icono"> ${amenity}`;
            amenitiesList.appendChild(li);
        });
    }

    // Rellenar galería de imágenes
    const mainImage = document.querySelector('.property-gallery .main-image img');
    const thumbnailImagesContainer = document.querySelector('.property-gallery .thumbnail-images');
    if (mainImage && space.images && space.images.length > 0) {
        mainImage.src = space.images[0];
    }

    if (thumbnailImagesContainer && space.images) {
        thumbnailImagesContainer.innerHTML = '';
        space.images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Imagen de la propiedad ${index + 1}`;
            img.addEventListener('click', () => {
                mainImage.src = imgSrc;
                document.querySelectorAll('.property-gallery .thumbnail-images img').forEach(thumb => thumb.classList.remove('active'));
                img.classList.add('active');
            });
            thumbnailImagesContainer.appendChild(img);
        });

        if (thumbnailImagesContainer.firstElementChild) {
            thumbnailImagesContainer.firstElementChild.classList.add('active');
        }
    }

    // Rellenar tarjeta de reserva
    const priceElement = document.querySelector('.booking-card .price span');
    if (priceElement) priceElement.textContent = space.price;

    const ratingElement = document.querySelector('.booking-card .rating span');
    if (ratingElement) ratingElement.textContent = ` ${space.rating}`;

    // Rellenar reseñas
    const reviewsTitle = document.querySelector('.reviews h2');
    if (reviewsTitle && space.reviews) {
        reviewsTitle.textContent = `Reseñas (${space.reviews.length})`;
    }

    const reviewList = document.querySelector('.reviews .review-list');
    if (reviewList && space.reviews) {
        reviewList.innerHTML = '';
        space.reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <div class="reviewer-info">
                    <img src="https://via.placeholder.com/40x40?text=User" alt="Foto del usuario" class="reviewer-avatar">
                    <p>${review.user}</p>
                    <p class="review-date">${review.date}</p>
                </div>
                <p class="review-text">"${review.text}"</p>
            `;
            reviewList.appendChild(reviewItem);
        });
    }

    // Funcionalidad de reserva
    setupBookingFunctionality();
}

// Function to initialize all modals
function initializeModals() {
    console.log('Inicializando modales...');

    // Share Modal
    initializeShareModal();

    // Save Modal
    initializeSaveModal();

    // Photo Tour Modal
    initializePhotoTourModal();

    // Login Modal (if exists)
    initializeLoginModal();

    console.log('Modales inicializados correctamente');
}

// Share Modal Functions
function initializeShareModal() {
    const shareBtn = document.querySelector('.share-btn');
    const shareModal = document.getElementById('shareModal');
    const closeShareModal = document.querySelector('.close-share-modal');

    console.log('Share elements found:', {
        shareBtn: !!shareBtn,
        shareModal: !!shareModal,
        closeShareModal: !!closeShareModal
    });

    if (shareBtn && shareModal) {
        shareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Abriendo modal de compartir');
            shareModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeShareModal && shareModal) {
        closeShareModal.addEventListener('click', () => {
            console.log('Cerrando modal de compartir');
            shareModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (shareModal) {
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                console.log('Cerrando modal de compartir (click fuera)');
                shareModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Setup social sharing after modal is initialized
    setupSocialSharing();
}

// Save Modal Functions
function initializeSaveModal() {
    const saveBtn = document.querySelector('.save-btn');
    const saveModal = document.getElementById('saveModal');
    const closeSaveModal = document.querySelector('.close-save-modal');

    if (saveBtn && saveModal) {
        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            saveModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeSaveModal && saveModal) {
        closeSaveModal.addEventListener('click', () => {
            saveModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (saveModal) {
        saveModal.addEventListener('click', (e) => {
            if (e.target === saveModal) {
                saveModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Create new list functionality
    const createNewListBtn = document.querySelector('.create-new-list');
    const newListInput = document.querySelector('.new-list-input');

    if (createNewListBtn && newListInput) {
        createNewListBtn.addEventListener('click', () => {
            newListInput.style.display = newListInput.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Save to list functionality
    const saveToListBtn = document.querySelector('.save-to-list-btn');
    if (saveToListBtn) {
        saveToListBtn.addEventListener('click', () => {
            const checkedLists = document.querySelectorAll('input[name="save-list"]:checked');
            if (checkedLists.length > 0) {
                const lists = Array.from(checkedLists).map(input => input.value).join(', ');
                showNotification(`¡Guardado en: ${lists}!`, 'success');
                saveModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            } else {
                showNotification('Selecciona al menos una lista', 'warning');
            }
        });
    }
}

// Photo Tour Modal Functions
function initializePhotoTourModal() {
    const showAllPhotosBtn = document.querySelector('.show-all-photos');
    const viewAllPhotosOverlay = document.querySelector('.view-all-photos-overlay');
    const photoTourModal = document.getElementById('photo-tour-modal');
    const closePhotoTourBtn = document.querySelector('.close-photo-tour-btn');

    // Handle both possible button selectors
    const photoButtons = [showAllPhotosBtn, viewAllPhotosOverlay].filter(btn => btn !== null);

    photoButtons.forEach(btn => {
        if (btn && photoTourModal) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                openPhotoTour();
            });

            // Add hover effect
            btn.style.cursor = 'pointer';
        }
    });

    if (closePhotoTourBtn && photoTourModal) {
        closePhotoTourBtn.addEventListener('click', () => {
            photoTourModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (photoTourModal) {
        photoTourModal.addEventListener('click', (e) => {
            if (e.target === photoTourModal) {
                photoTourModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Login Modal Functions (if exists)
function initializeLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.querySelector('.close');

    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', () => {
            loginModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Photo Tour Functionality
function openPhotoTour() {
    const urlParams = new URLSearchParams(window.location.search);
    const spaceId = parseInt(urlParams.get('spaceId')) || 1;
    const space = spacesData.find(s => s.id === spaceId) || spacesData[0];

    if (!space || !space.images) return;

    const photoTourModal = document.getElementById('photo-tour-modal');
    const photoTourContent = document.querySelector('.photo-tour-content');

    if (!photoTourModal || !photoTourContent) return;

    // Clear existing content
    photoTourContent.innerHTML = '';

    // Create photo grid
    const photoGrid = document.createElement('div');
    photoGrid.className = 'photo-tour-grid';

    space.images.forEach((imgSrc, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-tour-item';
        photoItem.innerHTML = `
            <img src="${imgSrc}" alt="Imagen ${index + 1}" loading="lazy">
            <div class="photo-overlay">
                <span>${index + 1} / ${space.images.length}</span>
            </div>
        `;
        photoGrid.appendChild(photoItem);
    });

    photoTourContent.appendChild(photoGrid);

    // Show modal
    photoTourModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Social Sharing Functions
function setupSocialSharing() {
    const currentUrl = encodeURIComponent(window.location.href);
    const currentTitle = encodeURIComponent(document.title);

    // Setup all share options
    const shareOptions = document.querySelectorAll('.share-option');
    shareOptions.forEach(option => {
        const shareType = option.getAttribute('data-share-type');

        option.addEventListener('click', (e) => {
            e.preventDefault();

            switch (shareType) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank', 'width=600,height=400');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?url=${currentUrl}&text=${currentTitle}`, '_blank', 'width=600,height=400');
                    break;
                case 'whatsapp':
                    window.open(`https://wa.me/?text=${currentTitle}%20${currentUrl}`, '_blank');
                    break;
                case 'email':
                    window.location.href = `mailto:?subject=${currentTitle}&body=Mira este increíble espacio: ${decodeURIComponent(currentUrl)}`;
                    break;
                case 'copy-link':
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        showNotification('¡Enlace copiado al portapapeles!', 'success');
                        // Close modal after copying
                        document.getElementById('shareModal').style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }).catch(() => {
                        showNotification('Error al copiar enlace', 'error');
                    });
                    break;
            }
        });
    });

    // Legacy support for specific buttons
    const facebookBtn = document.querySelector('.share-facebook');
    if (facebookBtn) {
        facebookBtn.addEventListener('click', () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank', 'width=600,height=400');
        });
    }

    const twitterBtn = document.querySelector('.share-twitter');
    if (twitterBtn) {
        twitterBtn.addEventListener('click', () => {
            window.open(`https://twitter.com/intent/tweet?url=${currentUrl}&text=${currentTitle}`, '_blank', 'width=600,height=400');
        });
    }

    const whatsappBtn = document.querySelector('.share-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            window.open(`https://wa.me/?text=${currentTitle}%20${currentUrl}`, '_blank');
        });
    }

    const emailBtn = document.querySelector('.share-email');
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            window.location.href = `mailto:?subject=${currentTitle}&body=Mira este increíble espacio: ${decodeURIComponent(currentUrl)}`;
        });
    }

    const copyLinkBtn = document.querySelector('.copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('¡Enlace copiado al portapapeles!', 'success');
            }).catch(() => {
                showNotification('Error al copiar enlace', 'error');
            });
        });
    }
}

// Booking Functionality
function setupBookingFunctionality() {
    const bookingButton = document.querySelector('.booking-card .btn-primary');
    if (bookingButton) {
        bookingButton.addEventListener('click', () => {
            const checkInDate = document.getElementById('check-in')?.value;
            const checkOutDate = document.getElementById('check-out')?.value;
            const numGuests = document.getElementById('num-guests')?.value;

            if (checkInDate && checkOutDate && numGuests) {
                showNotification(`¡Propiedad reservada!\nLlegada: ${checkInDate}\nSalida: ${checkOutDate}\nHuéspedes: ${numGuests}`, 'success');
            } else {
                showNotification('Por favor, completa todos los campos de reserva.', 'warning');
            }
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-weight: 500;
        white-space: pre-line;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // ESC key closes all modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal, .photo-tour-modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});