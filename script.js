// DOM Elements
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');
const spacesGrid = document.querySelector('.spaces-grid');

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    // Check if spacesData is available
    if (typeof spacesData === 'undefined') {
        console.error('spacesData no está definido. Asegúrate de que data.js se cargue antes de script.js');
        return;
    }

    initializeApp();
    setupEventListeners();
    generateSpaceCards();
});

function initializeApp() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

function setupEventListeners() {
    // Modal functionality
    if (loginBtn) loginBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Category filter functionality
    const categoryFilters = document.querySelectorAll('.category-filter-item');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const selectedCategory = filter.dataset.category;
            filterSpaces(selectedCategory);
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);

    // Form submission
    const loginForm = document.querySelector('.login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
}

function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function generateSpaceCards(spaces = spacesData) {
    if (!spacesGrid) return;
    spacesGrid.innerHTML = '';

    spaces.forEach((space, index) => {
        const spaceCard = createSpaceCard(space, index);
        // Staggered animation delay
        spaceCard.style.animationDelay = `${index * 0.05}s`;
        spacesGrid.appendChild(spaceCard);
    });
}

function createSpaceCard(space, index) {
    const card = document.createElement('div');
    card.className = 'space-card';

    card.innerHTML = `
        <div class="space-image-container">
            <img src="${space.image}" alt="${space.title}" class="space-image" loading="lazy">
            <button class="favorite-btn" onclick="toggleFavorite(${space.id}, this)">
                <i class="far fa-heart"></i>
            </button>
            <div class="space-rating">
                <i class="fas fa-star"></i>
                <span>${space.rating}</span>
            </div>
        </div>
        <div class="space-info">
            <div class="space-location">${space.title}</div>
            <div class="space-title">A 5km de distancia</div>
            <div class="space-price"><b>${space.price}</b> noche</div>
        </div>
    `;

    card.addEventListener('click', () => openSpaceDetails(space));
    return card;
}

function filterSpaces(category) {
    // 1. Show skeleton loaders immediately
    showSkeletonLoaders();

    // 2. Simulate a network delay
    setTimeout(() => {
        let filteredSpaces;
        if (category === 'all') {
            filteredSpaces = spacesData;
        } else {
            filteredSpaces = spacesData.filter(space => space.category === category);
        }
        // 3. Replace skeletons with actual data
        generateSpaceCards(filteredSpaces);
    }, 600); // 0.6 second delay
}

function showSkeletonLoaders() {
    if (!spacesGrid) return;
    spacesGrid.innerHTML = ''; // Clear existing cards

    for (let i = 0; i < 8; i++) { // Display 8 skeleton cards
        const skeletonCard = document.createElement('div');
        skeletonCard.className = 'skeleton-card';
        skeletonCard.innerHTML = `
            <div class="skeleton-image"><div class="shimmer"></div></div>
            <div class="skeleton-info">
                <div class="skeleton-text"></div>
                <div class="skeleton-text short"></div>
                <div class="skeleton-text price"></div>
            </div>
        `;
        spacesGrid.appendChild(skeletonCard);
    }
}

function openModal() {
    if (modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function toggleFavorite(spaceId, button) {
    event.stopPropagation(); // Prevent card click

    const icon = button.querySelector('i');
    const isFavorited = icon.classList.contains('fas');

    if (isFavorited) {
        icon.classList.remove('fas', 'fa-heart');
        icon.classList.add('far', 'fa-heart');
        icon.style.color = 'white';
        showNotification('Eliminado de favoritos', 'info');
    } else {
        icon.classList.remove('far', 'fa-heart');
        icon.classList.add('fas', 'fa-heart');
        icon.style.color = 'var(--brand-color)';
        showNotification('Agregado a favoritos', 'success');
    }
}

function openSpaceDetails(space) {
    // Redirect to the detail page
    window.location.href = `detail.html?spaceId=${space.id}`;
}

function handleLogin(e) {
    e.preventDefault();
    // ... (rest of your login logic)
    showNotification('¡Bienvenido a BE INN!', 'success');
    closeModal();
}

function showSignup() {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;
    // ... (rest of your signup logic)
}

function handleSignup(e) {
    e.preventDefault();
    // ... (rest of your signup logic)
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Trigger the animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100); // Small delay to allow the element to be painted

    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        // Remove the element from the DOM after the animation ends
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ===== ENHANCED SPACE CARDS FUNCTIONALITY =====

// Enhanced space card generation with image carousel
function generateSpaceCards(spaces = spacesData) {
    if (!spacesGrid) return;

    spacesGrid.innerHTML = '';

    spaces.forEach((space, index) => {
        const spaceCard = createEnhancedSpaceCard(space, index);
        spacesGrid.appendChild(spaceCard);
    });

    // Initialize image carousels after cards are created
    setTimeout(() => {
        initializeImageCarousels();
        initializeFavoriteButtons();
        initializeImageLoading();
        initializeVIPSystem();
    }, 100);
}

// Create enhanced space card with all improvements
function createEnhancedSpaceCard(space, index) {
    const card = document.createElement('div');
    card.className = 'space-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('data-space-id', space.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver detalles de ${space.title}`);

    // Determine special labels
    const isGuestFavorite = space.rating >= 4.9;
    const isSuperhost = space.rating >= 4.95;
    const hasInstantBook = Math.random() > 0.7; // Random for demo
    const isVerifiedHost = Math.random() > 0.5; // Random for demo

    card.innerHTML = `
        <div class="space-image-container">
            ${createImageCarousel(space.images || [space.image], space.id)}
            ${createImageNavigation(space.images || [space.image])}
            ${createImageDots(space.images || [space.image])}
            
            <!-- Rating Overlay -->
            <div class="space-rating">
                <i class="fas fa-star"></i>
                <span>${space.rating}</span>
            </div>
            
            <!-- Favorite Button -->
            <button class="favorite-btn" data-space-id="${space.id}" aria-label="Agregar a favoritos">
                <i class="far fa-heart"></i>
            </button>
            
            <!-- Special Labels -->
            ${isGuestFavorite ? '<div class="space-label guest-favorite">Favorito entre huéspedes</div>' : ''}
            ${isSuperhost ? '<div class="space-label superhost">Superanfitrión</div>' : ''}
            ${hasInstantBook ? '<div class="instant-book">Reserva instantánea</div>' : ''}
            ${isVerifiedHost ? '<div class="verified-host"><i class="fas fa-check-circle"></i> Verificado</div>' : ''}
            
            <!-- Image Quality Badge -->
            <div class="image-quality-badge">HD</div>
        </div>
        
        <div class="space-info">
            <div class="space-location">${space.location}</div>
            <div class="space-title">${space.title}</div>
            <div class="space-dates">${generateRandomDates()}</div>
            <div class="space-price">
                <span class="price-amount"><b>${space.price}</b></span>
                <span class="price-period"> noche</span>
            </div>
        </div>
    `;

    // Add click handler for navigation to detail page
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.favorite-btn') && !e.target.closest('.image-nav')) {
            window.location.href = `detail.html?spaceId=${space.id}`;
        }
    });

    // Add keyboard navigation
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.location.href = `detail.html?spaceId=${space.id}`;
        }
    });

    return card;
}

// Create image carousel HTML
function createImageCarousel(images, spaceId) {
    if (!images || images.length === 0) {
        // Return a placeholder image if no images are provided
        return `<img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop" 
                     alt="Imagen de espacio" 
                     class="space-image active loaded" 
                     data-index="0">`;
    }
    
    return images.map((image, index) => {
        // Ensure we have a valid image URL
        const imageUrl = image && image.trim() !== '' ? image : 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop';
        
        return `
            <img src="${imageUrl}" 
                 alt="Imagen ${index + 1}" 
                 class="space-image ${index === 0 ? 'active' : ''}" 
                 data-index="${index}"
                 loading="${index === 0 ? 'eager' : 'lazy'}"
                 onload="handleImageLoad(this)"
                 onerror="handleImageError(this)">
        `;
    }).join('');
}

// Create image navigation arrows
function createImageNavigation(images) {
    if (!images || images.length <= 1) return '';
    
    return `
        <button class="image-nav prev" aria-label="Imagen anterior">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="image-nav next" aria-label="Siguiente imagen">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
}

// Create image dots indicator
function createImageDots(images) {
    if (!images || images.length <= 1) return '';
    
    return `
        <div class="image-dots">
            ${images.map((_, index) => `
                <div class="image-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
            `).join('')}
        </div>
    `;
}

// Initialize image carousels
function initializeImageCarousels() {
    const spaceCards = document.querySelectorAll('.space-card');
    
    spaceCards.forEach(card => {
        const images = card.querySelectorAll('.space-image');
        const dots = card.querySelectorAll('.image-dot');
        const prevBtn = card.querySelector('.image-nav.prev');
        const nextBtn = card.querySelector('.image-nav.next');
        
        if (images.length <= 1) return;
        
        let currentIndex = 0;
        let autoSlideInterval;
        
        // Function to show specific image
        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.classList.add('active');
                    img.style.opacity = '1';
                    img.style.zIndex = '2';
                } else {
                    img.classList.remove('active');
                    img.style.opacity = '0';
                    img.style.zIndex = '1';
                }
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        }
        
        // Next image
        function nextImage() {
            const nextIndex = (currentIndex + 1) % images.length;
            showImage(nextIndex);
        }
        
        // Previous image
        function prevImage() {
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(prevIndex);
        }
        
        // Auto slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextImage, 4000);
        }
        
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                nextImage();
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                prevImage();
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(index);
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            });
        });
        
        // Auto slide on hover
        card.addEventListener('mouseenter', startAutoSlide);
        card.addEventListener('mouseleave', stopAutoSlide);
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        card.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        card.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextImage();
                } else {
                    prevImage();
                }
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            }
        }
    });
}

// Initialize favorite buttons
function initializeFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            const spaceId = btn.dataset.spaceId;
            const heartIcon = btn.querySelector('i');
            const isActive = btn.classList.contains('active');
            
            if (isActive) {
                // Remove from favorites
                btn.classList.remove('active');
                heartIcon.className = 'far fa-heart';
                showNotification('Eliminado de favoritos', 'info');
                removeFavorite(spaceId);
            } else {
                // Add to favorites
                btn.classList.add('active');
                heartIcon.className = 'fas fa-heart';
                showNotification('Agregado a favoritos', 'success');
                addFavorite(spaceId);
            }
        });
    });
}

// Initialize image loading states
function initializeImageLoading() {
    const images = document.querySelectorAll('.space-image');
    
    images.forEach(img => {
        if (!img.complete) {
            img.closest('.space-card').classList.add('loading');
        }
        
        img.addEventListener('load', () => {
            img.closest('.space-card').classList.remove('loading');
            img.classList.add('loaded');
        });
        
        img.addEventListener('error', () => {
            img.closest('.space-card').classList.remove('loading');
            img.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
        });
    });
}

// Generate random dates for demo
function generateRandomDates() {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 30));
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 7) + 1);
    
    const formatDate = (date) => {
        return date.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'short' 
        });
    };
    
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

// Favorites management
function addFavorite(spaceId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(spaceId)) {
        favorites.push(spaceId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFavorite(spaceId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter(id => id !== spaceId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.forEach(spaceId => {
        const btn = document.querySelector(`[data-space-id="${spaceId}"]`);
        if (btn) {
            btn.classList.add('active');
            btn.querySelector('i').className = 'fas fa-heart';
        }
    });
}

// Enhanced notification system
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type] || icons.info}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Load favorites when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(loadFavorites, 500);
});

// Enhanced filter function
function filterSpaces(category) {
    const filteredSpaces = category === 'all' 
        ? spacesData 
        : spacesData.filter(space => space.category === category);
    
    // Add loading state
    spacesGrid.style.opacity = '0.5';
    
    setTimeout(() => {
        generateSpaceCards(filteredSpaces);
        spacesGrid.style.opacity = '1';
        
        // Show result count
        const count = filteredSpaces.length;
        const categoryName = category === 'all' ? 'espacios' : category;
        showNotification(`${count} ${categoryName} encontrados`, 'info', 2000);
    }, 300);
}

// ===== IMAGE HANDLING FUNCTIONS =====

// Handle successful image loading
function handleImageLoad(img) {
    img.classList.add('loaded');
    
    // If this is the first/active image, make sure it's visible
    if (img.classList.contains('active') || img.dataset.index === '0') {
        img.style.opacity = '1';
        img.style.zIndex = '2';
    }
    
    const card = img.closest('.space-card');
    if (card) {
        card.classList.remove('loading');
        
        // Remove loading state from image container
        const container = img.closest('.space-image-container');
        if (container) {
            container.classList.remove('loading');
        }
    }
    
    console.log('Image loaded successfully:', img.src);
}

// Handle image loading errors
function handleImageError(img) {
    console.warn('Image failed to load:', img.src);
    
    // Set a fallback image
    const fallbackImages = [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
        'https://via.placeholder.com/400x300/E0E0E0/666666?text=Imagen+no+disponible'
    ];
    
    // Try a random fallback image
    const randomFallback = fallbackImages[Math.floor(Math.random() * (fallbackImages.length - 1))];
    
    // Prevent infinite error loop
    if (!img.dataset.errorHandled) {
        img.dataset.errorHandled = 'true';
        img.src = randomFallback;
        
        // If this is the active image, make sure it's visible
        if (img.classList.contains('active') || img.dataset.index === '0') {
            img.style.opacity = '1';
            img.style.zIndex = '2';
        }
    } else {
        // If even the fallback fails, use the final placeholder
        img.src = fallbackImages[fallbackImages.length - 1];
        img.classList.add('loaded');
        
        if (img.classList.contains('active') || img.dataset.index === '0') {
            img.style.opacity = '1';
            img.style.zIndex = '2';
        }
    }
    
    const card = img.closest('.space-card');
    if (card) {
        card.classList.remove('loading');
        
        const container = img.closest('.space-image-container');
        if (container) {
            container.classList.remove('loading');
        }
    }
}

// Initialize VIP system - ENHANCED
function initializeVIPSystem() {
    console.log('VIP system initialized');
    
    // Mark some spaces as VIP based on rating or random selection
    const spaceCards = document.querySelectorAll('.space-card');
    spaceCards.forEach((card, index) => {
        const spaceId = card.dataset.spaceId;
        const space = spacesData.find(s => s.id == spaceId);
        
        // Make spaces VIP based on high rating or random selection
        const isVIP = (space && space.rating >= 4.9) || Math.random() > 0.85;
        
        if (isVIP) {
            card.classList.add('vip-space');
            
            // Add VIP badge
            const imageContainer = card.querySelector('.space-image-container');
            if (imageContainer && !imageContainer.querySelector('.vip-badge')) {
                const vipBadge = document.createElement('div');
                vipBadge.className = 'vip-badge';
                vipBadge.innerHTML = '<i class="fas fa-crown"></i> VIP';
                vipBadge.style.zIndex = '25';
                imageContainer.appendChild(vipBadge);
            }
            
            // Enhance price display for VIP spaces
            const priceElement = card.querySelector('.space-price');
            if (priceElement) {
                const priceAmount = priceElement.querySelector('.price-amount') || priceElement.querySelector('b');
                const pricePeriod = priceElement.querySelector('.price-period');
                
                if (priceAmount && !priceAmount.classList.contains('vip-enhanced')) {
                    priceAmount.classList.add('vip-enhanced');
                    if (pricePeriod) {
                        pricePeriod.classList.add('vip-enhanced');
                    }
                }
            }
            
            console.log(`Space ${spaceId} marked as VIP`);
        }
    });
    
    // Ensure proper z-index stacking
    setTimeout(() => {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.style.zIndex = '30';
        });
        document.querySelectorAll('.vip-badge').forEach(badge => {
            badge.style.zIndex = '25';
        });
        document.querySelectorAll('.space-rating').forEach(rating => {
            rating.style.zIndex = '20';
        });
    }, 100);
}

// ===== UTILITY FUNCTIONS =====

// Preload images for better performance
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        if (url && url.trim() !== '') {
            const img = new Image();
            img.src = url;
        }
    });
}

// Get all unique images from spaces data for preloading
function getAllSpaceImages() {
    const allImages = [];
    spacesData.forEach(space => {
        if (space.image) allImages.push(space.image);
        if (space.images && Array.isArray(space.images)) {
            allImages.push(...space.images);
        }
    });
    return [...new Set(allImages)]; // Remove duplicates
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', () => {
    // Preload first few images for better initial experience
    const allImages = getAllSpaceImages();
    const firstImages = allImages.slice(0, 10); // Preload first 10 images
    preloadImages(firstImages);
});

// ===== ERROR HANDLING AND DEBUGGING =====

// Global error handler for debugging
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    
    // Handle specific image loading errors
    if (e.target && e.target.tagName === 'IMG') {
        handleImageError(e.target);
    }
});

// Debug function to check space data integrity
function debugSpaceData() {
    console.log('Debugging space data...');
    
    spacesData.forEach((space, index) => {
        if (!space.image) {
            console.warn(`Space ${index} (${space.title}) missing main image`);
        }
        
        if (!space.images || space.images.length === 0) {
            console.warn(`Space ${index} (${space.title}) missing images array`);
        }
        
        if (space.images) {
            space.images.forEach((img, imgIndex) => {
                if (!img || img.trim() === '') {
                    console.warn(`Space ${index} (${space.title}) has empty image at index ${imgIndex}`);
                }
            });
        }
    });
}

// Call debug function in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(debugSpaceData, 1000);
}