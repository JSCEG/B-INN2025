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
            openModal(shareModal);
        });
    }

    if (closeShareModal && shareModal) {
        closeShareModal.addEventListener('click', () => {
            console.log('Cerrando modal de compartir');
            closeModal(shareModal);
        });
    }

    if (shareModal) {
        shareModal.addEventListener('click', (e) => {
            if (e.target === shareModal) {
                console.log('Cerrando modal de compartir (click fuera)');
                closeModal(shareModal);
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
            openModal(saveModal);
        });
    }

    if (closeSaveModal && saveModal) {
        closeSaveModal.addEventListener('click', () => {
            closeModal(saveModal);
        });
    }

    if (saveModal) {
        saveModal.addEventListener('click', (e) => {
            if (e.target === saveModal) {
                closeModal(saveModal);
            }
        });
    }

    // Wishlist item selection
    const wishlistItems = document.querySelectorAll('.wishlist-item');
    wishlistItems.forEach(item => {
        item.addEventListener('click', () => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                item.classList.toggle('selected', checkbox.checked);
            }
        });
    });

    // Create new list functionality
    const createNewListBtn = document.querySelector('.create-new-list');
    const newListInput = document.querySelector('.new-list-input');
    const cancelListBtn = document.querySelector('.cancel-list-btn');

    if (createNewListBtn && newListInput) {
        createNewListBtn.addEventListener('click', () => {
            newListInput.style.display = 'block';
            createNewListBtn.style.display = 'none';
            newListInput.querySelector('input').focus();
        });
    }

    if (cancelListBtn && newListInput && createNewListBtn) {
        cancelListBtn.addEventListener('click', () => {
            newListInput.style.display = 'none';
            createNewListBtn.style.display = 'flex';
            newListInput.querySelector('input').value = '';
        });
    }

    // Create list button
    const createListBtn = document.querySelector('.create-list-btn');
    if (createListBtn && newListInput && createNewListBtn) {
        createListBtn.addEventListener('click', () => {
            const listName = newListInput.querySelector('input').value.trim();
            if (listName) {
                showNotification(`¡Lista "${listName}" creada exitosamente!`, 'success');
                newListInput.style.display = 'none';
                createNewListBtn.style.display = 'flex';
                newListInput.querySelector('input').value = '';
            } else {
                showNotification('Por favor ingresa un nombre para la lista', 'warning');
            }
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

                // Update heart icon to filled
                const heartIcon = document.querySelector('.save-btn i');
                if (heartIcon) {
                    heartIcon.className = 'fas fa-heart';
                    heartIcon.style.color = '#FF385C';
                }

                closeModal(saveModal);
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
            closePhotoTourModal();
        });
    }

    // Photo tour action buttons
    const sharePhotoBtn = document.querySelector('.share-photo-btn');
    const savePhotoBtn = document.querySelector('.save-photo-btn');

    if (sharePhotoBtn) {
        sharePhotoBtn.addEventListener('click', () => {
            // Close photo tour and open share modal
            closePhotoTourModal();
            setTimeout(() => {
                const shareModal = document.getElementById('shareModal');
                if (shareModal) {
                    openModal(shareModal);
                }
            }, 300);
        });
    }

    if (savePhotoBtn) {
        savePhotoBtn.addEventListener('click', () => {
            // Close photo tour and open save modal
            closePhotoTourModal();
            setTimeout(() => {
                const saveModal = document.getElementById('saveModal');
                if (saveModal) {
                    openModal(saveModal);
                }
            }, 300);
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
    const photoTourModal = document.getElementById('photo-tour-modal');

    if (!photoTourModal) return;

    // Prevent body scroll
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    // Show modal with animation
    photoTourModal.style.display = 'block';
    setTimeout(() => {
        photoTourModal.classList.add('active');
    }, 10);
}

function closePhotoTourModal() {
    const photoTourModal = document.getElementById('photo-tour-modal');

    if (!photoTourModal) return;

    photoTourModal.classList.remove('active');
    setTimeout(() => {
        photoTourModal.style.display = 'none';
        // Restore body scroll
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, 400);
}

// Helper function to close modals
function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
    }, 300);
}

// Helper function to open modals
function openModal(modal) {
    if (!modal) return;

    // Prevent body scroll
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Social Sharing Functions
function setupSocialSharing() {
    const currentUrl = encodeURIComponent(window.location.href);
    const currentTitle = encodeURIComponent('Increíble Loft con Vista al Mar - BE INN');
    const currentDescription = encodeURIComponent('Disfruta de una experiencia de lujo en este alojamiento céntrico con vista al mar.');

    // Setup all share options
    const shareOptions = document.querySelectorAll('.share-option');
    shareOptions.forEach(option => {
        const shareType = option.getAttribute('data-share-type');

        option.addEventListener('click', (e) => {
            e.preventDefault();

            switch (shareType) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank', 'width=600,height=400');
                    showNotification('¡Compartido en Facebook!', 'success');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?url=${currentUrl}&text=${currentTitle}`, '_blank', 'width=600,height=400');
                    showNotification('¡Compartido en Twitter!', 'success');
                    break;
                case 'whatsapp':
                    const whatsappText = `${decodeURIComponent(currentTitle)} - ${decodeURIComponent(currentUrl)}`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(whatsappText)}`, '_blank');
                    showNotification('¡Compartido en WhatsApp!', 'success');
                    break;
                case 'messenger':
                    window.open(`https://www.facebook.com/dialog/send?link=${currentUrl}&app_id=YOUR_APP_ID`, '_blank', 'width=600,height=400');
                    showNotification('¡Compartido en Messenger!', 'success');
                    break;
                case 'email':
                    const emailSubject = decodeURIComponent(currentTitle);
                    const emailBody = `Mira este increíble espacio:\n\n${decodeURIComponent(currentDescription)}\n\n${decodeURIComponent(currentUrl)}`;
                    window.location.href = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                    showNotification('¡Abriendo cliente de correo!', 'info');
                    break;
                case 'copy-link':
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        showNotification('¡Enlace copiado al portapapeles!', 'success');
                        closeModal(document.getElementById('shareModal'));
                    }).catch(() => {
                        // Fallback for older browsers
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        try {
                            document.execCommand('copy');
                            showNotification('¡Enlace copiado al portapapeles!', 'success');
                            closeModal(document.getElementById('shareModal'));
                        } catch (err) {
                            showNotification('Error al copiar enlace', 'error');
                        }
                        document.body.removeChild(textArea);
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

// Enhanced notification system - Mobile First
function showNotification(message, type = 'info', duration = 4000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Icon based on type
    let icon = '';
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        case 'info':
        default:
            icon = '<i class="fas fa-info-circle"></i>';
            break;
    }

    notification.innerHTML = `
        ${icon}
        <span>${message}</span>
    `;

    // Mobile-first styles
    const isMobile = window.innerWidth < 768;
    const backgroundColor = type === 'success' ? '#4CAF50' :
        type === 'warning' ? '#FF9800' :
            type === 'error' ? '#f44336' : '#2196F3';

    notification.style.cssText = `
        position: fixed;
        ${isMobile ? 'bottom: 20px; left: 16px; right: 16px;' : 'top: 100px; right: 20px; max-width: 350px;'}
        background: ${backgroundColor};
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        z-index: 10001;
        transform: ${isMobile ? 'translateY(100%)' : 'translateX(100%)'};
        transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 12px;
        backdrop-filter: blur(10px);
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = isMobile ? 'translateY(0)' : 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
        notification.style.transform = isMobile ? 'translateY(100%)' : 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // ESC key closes all modals
    if (e.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal.active, .photo-tour-modal.active');
        activeModals.forEach(modal => {
            if (modal.classList.contains('photo-tour-modal')) {
                closePhotoTourModal();
            } else {
                closeModal(modal);
            }
        });
    }
});

// Prevent body scroll when modals are open
function preventBodyScroll() {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
}

function restoreBodyScroll() {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

