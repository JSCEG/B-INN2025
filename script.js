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