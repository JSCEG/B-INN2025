// ===== LANDING PAGE JAVASCRIPT =====

// Debug: Ensure script is loading
console.log('Landing script loaded successfully');

// ===== GLOBAL FUNCTIONS (AVAILABLE IMMEDIATELY) =====

// Voice demo functions - GLOBAL
window.startVoiceDemo = function() {
    console.log('startVoiceDemo called');
    const voiceModal = document.getElementById('voiceModal');
    if (!voiceModal) {
        console.error('Voice modal not found');
        return;
    }
    
    voiceModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal entrance
    const modalContent = document.querySelector('.voice-modal-content');
    if (modalContent) {
        modalContent.style.transform = 'scale(0.8) translateY(50px)';
        modalContent.style.opacity = '0';
        
        setTimeout(function() {
            modalContent.style.transition = 'all 0.4s ease';
            modalContent.style.transform = 'scale(1) translateY(0)';
            modalContent.style.opacity = '1';
        }, 100);
    }
    
    // Start voice waves animation
    if (typeof window.startVoiceWaves === 'function') {
        window.startVoiceWaves();
    }
};

// Navigation functions - GLOBAL
window.scrollToSpaces = function() {
    console.log('scrollToSpaces called');
    const searchSection = document.getElementById('search-spaces');
    if (searchSection) {
        searchSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // If search section doesn't exist, scroll to categories
        const categoriesSection = document.querySelector('.categories-section');
        if (categoriesSection) {
            categoriesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.log('No target section found, scrolling to next section');
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    }
};

// Close voice demo - GLOBAL
window.closeVoiceDemo = function() {
    const voiceModal = document.getElementById('voiceModal');
    if (!voiceModal) return;
    
    const modalContent = voiceModal.querySelector('.voice-modal-content');
    if (modalContent) {
        modalContent.style.transform = 'scale(0.8) translateY(50px)';
        modalContent.style.opacity = '0';
    }
    
    setTimeout(() => {
        voiceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);
    
    stopVoiceWaves();
};

// DOM Elements
const voiceModal = document.getElementById('voiceModal');
const recordBtn = document.getElementById('recordBtn');
const voiceStatus = document.getElementById('voiceStatus');

// ===== ESSENTIAL FUNCTIONS (MUST BE FIRST) =====

// Functions moved to global scope above

// Voice waves functions - GLOBAL
window.startVoiceWaves = function() {
    try {
        const waves = document.querySelectorAll('.wave, .viz-bar');
        waves.forEach(function(wave) {
            wave.style.opacity = '1';
            wave.style.animationPlayState = 'running';
        });
        console.log('Voice waves started');
    } catch (error) {
        console.error('Error starting voice waves:', error);
    }
};

window.stopVoiceWaves = function() {
    try {
        const waves = document.querySelectorAll('.wave, .viz-bar');
        waves.forEach(function(wave) {
            wave.style.opacity = '0.6';
            wave.style.animationPlayState = 'paused';
        });
        console.log('Voice waves stopped');
    } catch (error) {
        console.error('Error stopping voice waves:', error);
    }
};

// Local functions for internal use
function startVoiceWaves() {
    window.startVoiceWaves();
}

function stopVoiceWaves() {
    window.stopVoiceWaves();
}

// Initialize landing page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupEventListeners();
    startHeroAnimations();
});

// Initialize animations
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section-header, .feature-card, .category-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Setup event listeners
function setupEventListeners() {
    // --- Refactored Event Listeners ---

    // Hero Section
    document.getElementById('startVoiceDemoBtn')?.addEventListener('click', startVoiceDemo);
    document.getElementById('scrollToSpacesBtn')?.addEventListener('click', scrollToSpaces);

    // Search Section
    document.getElementById('toggleVoiceSearchBtn')?.addEventListener('click', toggleVoiceSearch);
    document.getElementById('performSearchBtn')?.addEventListener('click', performSearch);
    document.getElementById('startVoiceChatBtn')?.addEventListener('click', startVoiceDemo);

    // Success Stories Section
    document.getElementById('calculateEarningsBtn')?.addEventListener('click', calculateEarnings);
    document.getElementById('becomeOuterBtn')?.addEventListener('click', () => {
        window.location.href = 'home.html?becomeOuter=true';
    });

    // CTA Section
    document.getElementById('ctaHomeBtn')?.addEventListener('click', () => {
        window.location.href = 'home.html';
    });
    document.getElementById('ctaLoginBtn')?.addEventListener('click', showLoginModal);

    // Voice Modal
    document.getElementById('closeVoiceDemoBtn')?.addEventListener('click', closeVoiceDemo);
    document.getElementById('recordBtn')?.addEventListener('click', toggleRecording);
    document.getElementById('suggestionChip1')?.addEventListener('click', (e) => simulateVoiceInput(e.target.textContent));
    document.getElementById('suggestionChip2')?.addEventListener('click', (e) => simulateVoiceInput(e.target.textContent));
    document.getElementById('suggestionChip3')?.addEventListener('click', (e) => simulateVoiceInput(e.target.textContent));

    // Login Modal
    document.getElementById('closeLoginModalBtn')?.addEventListener('click', closeLoginModal);
    document.getElementById('loginForm')?.addEventListener('submit', handleLoginSubmit);
    document.getElementById('showSignupLink')?.addEventListener('click', showSignup);
    document.getElementById('googleSignInBtn')?.addEventListener('click', signInWithGoogle);
    document.getElementById('facebookSignInBtn')?.addEventListener('click', signInWithFacebook);


    // --- Original Event Listeners ---

    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            navigateToSpaces(category);
        });
    });

    // Voice modal close
    document.addEventListener('click', (e) => {
        if (e.target === voiceModal) {
            closeVoiceDemo();
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Search form submission
    const searchForm = document.querySelector('.advanced-search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            performSearch();
        });
    }
}

// Start hero animations
function startHeroAnimations() {
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }

    // Animate stats counter
    setTimeout(() => {
        animateCounters();
    }, 1500);
}

// Animate number counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isTime = target.includes('/');
        
        if (isTime) return; // Skip 24/7
        
        const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
        let current = 0;
        const increment = numericTarget / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
                current = numericTarget;
                clearInterval(timer);
            }
            
            if (isPercentage) {
                counter.textContent = Math.floor(current) + '%';
            } else if (numericTarget >= 1000) {
                counter.textContent = Math.floor(current / 1000) + 'K+';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// Voice demo functions (duplicate removed)

function closeVoiceDemo() {
    const voiceModal = document.getElementById('voiceModal');
    if (!voiceModal) return;
    
    const modalContent = voiceModal.querySelector('.voice-modal-content');
    if (modalContent) {
        modalContent.style.transform = 'scale(0.8) translateY(50px)';
        modalContent.style.opacity = '0';
    }
    
    setTimeout(() => {
        voiceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);
    
    stopVoiceWaves();
}

function startVoiceWaves() {
    const waves = document.querySelectorAll('.wave');
    waves.forEach(wave => {
        wave.style.opacity = '1';
    });
}

function stopVoiceWaves() {
    const waves = document.querySelectorAll('.wave');
    waves.forEach(wave => {
        wave.style.opacity = '0';
    });
}

let isRecording = false;

function toggleRecording() {
    if (!isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
}

function startRecording() {
    isRecording = true;
    recordBtn.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
    recordBtn.innerHTML = '<i class="fas fa-stop"></i>';
    voiceStatus.textContent = 'Escuchando... Habla ahora';
    
    startVoiceWaves();
    
    // Simulate recording for demo
    setTimeout(() => {
        if (isRecording) {
            processVoiceInput("Necesito una oficina para mañana en el centro");
        }
    }, 3000);
}

function stopRecording() {
    isRecording = false;
    recordBtn.style.background = 'linear-gradient(135deg, #FF7B00 0%, #FF9533 100%)';
    recordBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    voiceStatus.textContent = 'Procesando...';
    
    stopVoiceWaves();
}

function processVoiceInput(input) {
    voiceStatus.textContent = `Escuché: "${input}"`;
    
    setTimeout(() => {
        voiceStatus.innerHTML = `
            <div style="text-align: left; max-width: 400px; margin: 0 auto;">
                <p><strong>✅ Encontré 3 oficinas disponibles mañana:</strong></p>
                <p>• Oficina Premium Centro - $2,500 MXN</p>
                <p>• Coworking Plaza - $1,800 MXN</p>
                <p>• Estudio Ejecutivo - $3,200 MXN</p>
                <br>
                <p><strong>¿Te gustaría que reserve alguna?</strong></p>
            </div>
        `;
        
        // Add action buttons
        const actionButtons = document.createElement('div');
        actionButtons.style.marginTop = '20px';
        actionButtons.innerHTML = `
            <button onclick="simulateBooking()" style="
                background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                cursor: pointer;
                margin-right: 12px;
                font-weight: 600;
            ">Reservar la primera</button>
            <button onclick="showMoreOptions()" style="
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border: 2px solid rgba(255, 255, 255, 0.3);
                padding: 10px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
            ">Ver más opciones</button>
        `;
        
        document.querySelector('.voice-status').appendChild(actionButtons);
    }, 2000);
}

function simulateVoiceInput(text) {
    processVoiceInput(text);
}

function simulateBooking() {
    voiceStatus.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 3rem; color: #27ae60; margin-bottom: 16px;">✅</div>
            <p><strong>¡Reserva confirmada!</strong></p>
            <p>Oficina Premium Centro reservada para mañana</p>
            <p>Te envié los detalles por email y SMS</p>
            <br>
            <button onclick="closeVoiceDemo()" style="
                background: linear-gradient(135deg, #FF7B00 0%, #FF9533 100%);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
            ">¡Perfecto!</button>
        </div>
    `;
}

function showMoreOptions() {
    voiceStatus.textContent = 'Redirigiendo a la búsqueda completa...';
    setTimeout(() => {
        closeVoiceDemo();
        setTimeout(() => {
            window.location.href = 'home.html?category=oficinas';
        }, 500);
    }, 1500);
}

// Navigation functions (duplicate removed)

function navigateToSpaces(category = 'all') {
    // Store the selected category and navigate
    localStorage.setItem('selectedCategory', category);
    window.location.href = 'home.html';
}

function performSearch() {
    const location = document.getElementById('locationInput').value;
    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    
    // Get selected categories
    const selectedCategories = [];
    document.querySelectorAll('.filter-checkbox input:checked').forEach(checkbox => {
        selectedCategories.push(checkbox.value);
    });
    
    // Build search parameters
    const searchParams = new URLSearchParams();
    if (location) searchParams.set('location', location);
    if (date) searchParams.set('date', date);
    if (time) searchParams.set('time', time);
    if (selectedCategories.length > 0) {
        searchParams.set('categories', selectedCategories.join(','));
    }
    
    // Navigate to main app with search parameters
    window.location.href = `home.html?${searchParams.toString()}`;
}

function toggleVoiceSearch() {
    startVoiceDemo();
}

function showLoginModal() {
    // Navigate to main app and trigger login modal
    window.location.href = 'home.html?showLogin=true';
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroVideo && scrolled < window.innerHeight) {
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Typing animation for hero title
function startTypingAnimation() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.opacity = '1';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
}

// Add floating animation to feature cards
function addFloatingAnimation() {
    const cards = document.querySelectorAll('.feature-card, .category-card');
    
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) rotate(1deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
}

// Initialize floating animations after page load
setTimeout(addFloatingAnimation, 1000);

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
    }
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
        }
        33% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
        }
        66% {
            transform: translateY(-10px) translateX(-10px);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
setTimeout(createParticles, 2000);

// Add smooth reveal animation for sections
function addRevealAnimation() {
    const sections = document.querySelectorAll('section');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('reveal');
        revealObserver.observe(section);
    });
}

// Add reveal styles
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// Initialize reveal animations
setTimeout(addRevealAnimation, 500);

// Add loading screen
function showLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'pageLoader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0052A1 0%, #3399FF 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <img src="image/logo.png" alt="B-INN" style="height: 80px; filter: brightness(0) invert(1); margin-bottom: 24px; animation: pulse 2s infinite;">
            <div style="font-size: 1.2rem; font-weight: 600;">Cargando experiencia B-INN...</div>
            <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; margin: 24px auto; overflow: hidden;">
                <div style="width: 100%; height: 100%; background: #FF7B00; border-radius: 2px; animation: loading 2s ease-in-out infinite;"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });
}

// Add loading animation styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    @keyframes loading {
        0% { transform: translateX(-100%); }
        50% { transform: translateX(0%); }
        100% { transform: translateX(100%); }
    }
`;
document.head.appendChild(loadingStyle);

// Show loading screen
showLoadingScreen();

// ===== EARNINGS CALCULATOR FUNCTIONALITY =====

// Earnings data based on space type and location
const earningsData = {
    office: {
        cdmx: { min: 35000, max: 55000 },
        gdl: { min: 25000, max: 40000 },
        mty: { min: 30000, max: 45000 },
        other: { min: 20000, max: 35000 }
    },
    parking: {
        cdmx: { min: 15000, max: 30000 },
        gdl: { min: 12000, max: 25000 },
        mty: { min: 14000, max: 28000 },
        other: { min: 8000, max: 20000 }
    },
    event: {
        cdmx: { min: 45000, max: 80000 },
        gdl: { min: 35000, max: 65000 },
        mty: { min: 40000, max: 70000 },
        other: { min: 25000, max: 50000 }
    },
    special: {
        cdmx: { min: 40000, max: 75000 },
        gdl: { min: 30000, max: 60000 },
        mty: { min: 35000, max: 65000 },
        other: { min: 22000, max: 45000 }
    }
};

window.calculateEarnings = function() {
    const spaceType = document.getElementById('spaceType').value;
    const location = document.getElementById('location').value;
    const resultDiv = document.getElementById('earningsResult');
    const amountElement = document.getElementById('estimatedAmount');
    
    if (!spaceType || !location) {
        // Show error message
        showNotification('Por favor selecciona el tipo de espacio y ubicación', 'warning', 3000);
        return;
    }
    
    // Get earnings range for selected combination
    const earnings = earningsData[spaceType][location];
    const estimatedAmount = Math.floor((earnings.min + earnings.max) / 2);
    
    // Animate the result
    resultDiv.style.display = 'block';
    amountElement.style.opacity = '0';
    
    setTimeout(() => {
        // Animate number counting
        animateEarningsCounter(estimatedAmount, amountElement);
        amountElement.style.transition = 'opacity 0.5s ease';
        amountElement.style.opacity = '1';
    }, 200);
    
    // Add some visual feedback
    const calculateBtn = document.querySelector('.calculate-btn');
    calculateBtn.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    calculateBtn.innerHTML = '<i class="fas fa-check"></i><span>¡Calculado!</span>';
    
    setTimeout(() => {
        calculateBtn.style.background = 'linear-gradient(135deg, #FF7B00 0%, #FF9533 100%)';
        calculateBtn.innerHTML = '<i class="fas fa-calculator"></i><span>Calcular mis ingresos</span>';
    }, 2000);
}

function animateEarningsCounter(target, element) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = `$${Math.floor(current).toLocaleString('es-MX')} MXN`;
    }, 30);
}

// ===== SUCCESS STORIES ANIMATIONS =====

// Animate growth bars when they come into view
function animateGrowthBars() {
    const growthBars = document.querySelectorAll('.growth-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.transition = 'width 2s ease-out';
                    bar.style.width = width;
                }, 500);
                
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    growthBars.forEach(bar => observer.observe(bar));
}

// Initialize success stories animations
function initializeSuccessStories() {
    // Animate story cards on scroll
    const storyCards = document.querySelectorAll('.story-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });
    
    storyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Initialize growth bar animations
    setTimeout(animateGrowthBars, 1000);
}

// ===== ENHANCED STORY INTERACTIONS =====

// Add hover effects to story cards
function addStoryInteractions() {
    const storyCards = document.querySelectorAll('.story-card');
    
    storyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Pause growth bar animation on hover
            const growthBar = card.querySelector('.growth-bar');
            if (growthBar) {
                growthBar.style.animationPlayState = 'paused';
            }
            
            // Add subtle glow effect
            card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            // Resume growth bar animation
            const growthBar = card.querySelector('.growth-bar');
            if (growthBar) {
                growthBar.style.animationPlayState = 'running';
            }
            
            // Remove glow effect
            card.style.boxShadow = '';
        });
    });
}

// ===== TESTIMONIAL ROTATION =====

// Add dynamic testimonial rotation
function startTestimonialRotation() {
    const quotes = [
        {
            text: "Convertí mi oficina extra en una fuente de ingresos constante. En 6 meses ya había recuperado la inversión inicial.",
            author: "María González"
        },
        {
            text: "La IA de B-INN maneja todo automáticamente. Yo solo recibo los pagos cada mes.",
            author: "María González"
        },
        {
            text: "Mis clientes siempre quedan satisfechos con la calidad del servicio. B-INN me ayuda a mantener 5 estrellas.",
            author: "María González"
        }
    ];
    
    const featuredCard = document.querySelector('.story-card.featured');
    const quoteElement = featuredCard?.querySelector('.story-quote');
    
    if (!quoteElement) return;
    
    let currentQuote = 0;
    
    setInterval(() => {
        currentQuote = (currentQuote + 1) % quotes.length;
        
        // Fade out
        quoteElement.style.opacity = '0';
        
        setTimeout(() => {
            quoteElement.textContent = quotes[currentQuote].text;
            // Fade in
            quoteElement.style.opacity = '1';
        }, 300);
        
    }, 8000); // Change every 8 seconds
}

// ===== EARNINGS CALCULATOR ENHANCEMENTS =====

// Add real-time preview as user selects options
function addCalculatorPreview() {
    const spaceTypeSelect = document.getElementById('spaceType');
    const locationSelect = document.getElementById('location');
    
    if (!spaceTypeSelect || !locationSelect) return;
    
    [spaceTypeSelect, locationSelect].forEach(select => {
        select.addEventListener('change', () => {
            const spaceType = spaceTypeSelect.value;
            const location = locationSelect.value;
            
            if (spaceType && location) {
                // Show preview hint
                const calculateBtn = document.querySelector('.calculate-btn');
                calculateBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                calculateBtn.innerHTML = '<i class="fas fa-calculator"></i><span>¡Listo para calcular!</span>';
                
                // Add pulse animation
                calculateBtn.style.animation = 'pulse 2s infinite';
                
                setTimeout(() => {
                    calculateBtn.style.animation = '';
                }, 4000);
            }
        });
    });
}

// ===== SOCIAL PROOF COUNTER =====

// Add animated counters for social proof
function addSocialProofCounters() {
    const counters = [
        { element: '.total-outers', target: 15420, suffix: '+ Outers activos' },
        { element: '.total-earnings', target: 2.8, suffix: 'M MXN generados este mes', isDecimal: true },
        { element: '.avg-rating', target: 4.9, suffix: '★ Calificación promedio', isDecimal: true }
    ];
    
    // Create social proof section if it doesn't exist
    const socialProofHTML = `
        <div class="social-proof-bar">
            <div class="container">
                <div class="proof-stats">
                    <div class="proof-stat">
                        <span class="proof-number total-outers">0</span>
                        <span class="proof-label">Outers activos</span>
                    </div>
                    <div class="proof-stat">
                        <span class="proof-number total-earnings">$0</span>
                        <span class="proof-label">MXN generados este mes</span>
                    </div>
                    <div class="proof-stat">
                        <span class="proof-number avg-rating">0</span>
                        <span class="proof-label">★ Calificación promedio</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after success stories section
    const successSection = document.querySelector('.success-stories-section');
    if (successSection) {
        successSection.insertAdjacentHTML('afterend', socialProofHTML);
        
        // Add styles
        const proofStyles = `
            .social-proof-bar {
                background: linear-gradient(135deg, #222 0%, #333 100%);
                color: white;
                padding: 40px 0;
            }
            
            .proof-stats {
                display: flex;
                justify-content: center;
                gap: 80px;
                flex-wrap: wrap;
            }
            
            .proof-stat {
                text-align: center;
            }
            
            .proof-number {
                display: block;
                font-size: 2.5rem;
                font-weight: 800;
                color: #FF7B00;
                margin-bottom: 8px;
            }
            
            .proof-label {
                font-size: 0.9rem;
                opacity: 0.8;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            @media (max-width: 768px) {
                .proof-stats { gap: 40px; }
                .proof-number { font-size: 2rem; }
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = proofStyles;
        document.head.appendChild(styleSheet);
        
        // Animate counters
        setTimeout(() => {
            counters.forEach(counter => {
                const element = document.querySelector(counter.element);
                if (element) {
                    animateProofCounter(counter.target, element, counter.isDecimal, counter.suffix);
                }
            });
        }, 1000);
    }
}

function animateProofCounter(target, element, isDecimal = false, suffix = '') {
    let current = 0;
    const increment = target / 60;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        let displayValue;
        if (isDecimal) {
            displayValue = current.toFixed(1);
        } else if (target >= 1000) {
            displayValue = Math.floor(current).toLocaleString('es-MX');
        } else {
            displayValue = Math.floor(current);
        }
        
        if (suffix.includes('MXN')) {
            element.textContent = `$${displayValue}M`;
        } else if (suffix.includes('★')) {
            element.textContent = displayValue;
        } else {
            element.textContent = displayValue + '+';
        }
    }, 50);
}

// Initialize all success stories functionality
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeSuccessStories();
        addStoryInteractions();
        startTestimonialRotation();
        addCalculatorPreview();
        addSocialProofCounters();
    }, 1000);
});

// ===== BECOME OUTER FLOW =====

// Handle become outer button click
function handleBecomeOuter() {
    // Store intent and redirect
    localStorage.setItem('becomeOuterIntent', 'true');
    localStorage.setItem('referralSource', 'landing-success-stories');
    
    // Show loading state
    const btn = document.querySelector('.become-outer-btn');
    const originalContent = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Redirigiendo...</span>';
    btn.style.pointerEvents = 'none';
    
    setTimeout(() => {
        window.location.href = 'home.html?becomeOuter=true';
    }, 1500);
}

// Add click handler to become outer button
document.addEventListener('DOMContentLoaded', function() {
    const becomeOuterBtn = document.querySelector('.become-outer-btn');
    if (becomeOuterBtn) {
        becomeOuterBtn.addEventListener('click', handleBecomeOuter);
    }
});

// ===== BRUTAL HERO SECTION JAVASCRIPT =====

// Initialize brutal hero effects
function initializeBrutalHero() {
    createParticleSystem();
    initializeStatCounters();
    setupVoiceVisualization();
    setupScrollIndicator();
    startBackgroundAnimations();
}

// Create dynamic particle system
function createParticleSystem() {
    const particleContainer = document.getElementById('particles');
    if (!particleContainer) return;
    
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: particleFloat ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            pointer-events: none;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Add particle animation styles
    const particleStyles = document.createElement('style');
    particleStyles.textContent = `
        @keyframes particleFloat {
            0%, 100% {
                transform: translateY(0px) translateX(0px) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-30px) translateX(15px) scale(1.2);
                opacity: 0.8;
            }
            50% {
                transform: translateY(-60px) translateX(-10px) scale(0.8);
                opacity: 1;
            }
            75% {
                transform: translateY(-20px) translateX(-25px) scale(1.1);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(particleStyles);
}

// Initialize animated stat counters
function initializeStatCounters() {
    const statItems = document.querySelectorAll('.stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItem = entry.target;
                const targetValue = parseInt(statItem.dataset.stat);
                const numberElement = statItem.querySelector('.stat-number');
                
                if (targetValue && numberElement) {
                    animateStatCounter(numberElement, targetValue);
                }
                
                observer.unobserve(statItem);
            }
        });
    }, { threshold: 0.5 });
    
    statItems.forEach(item => observer.observe(item));
}

// Animate individual stat counter
function animateStatCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const isPercentage = element.textContent.includes('%');
    const is247 = element.textContent.includes('24/7');
    
    if (is247) return; // Skip 24/7
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (isPercentage) {
            element.textContent = Math.floor(current) + '%';
        } else if (target >= 1000) {
            element.textContent = (Math.floor(current / 1000)) + 'K+';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Setup voice visualization
function setupVoiceVisualization() {
    const voiceViz = document.getElementById('voiceViz');
    if (!voiceViz) return;
    
    voiceViz.addEventListener('click', () => {
        startVoiceDemo();
        
        // Add click effect
        voiceViz.style.transform = 'scale(0.95)';
        setTimeout(() => {
            voiceViz.style.transform = 'scale(1.05)';
            setTimeout(() => {
                voiceViz.style.transform = 'scale(1)';
            }, 150);
        }, 100);
    });
    
    // Add hover effect for viz bars
    const vizBars = voiceViz.querySelectorAll('.viz-bar');
    voiceViz.addEventListener('mouseenter', () => {
        vizBars.forEach((bar, index) => {
            bar.style.animationDuration = '0.8s';
            bar.style.background = 'linear-gradient(to top, #FF9533, #FFB366)';
        });
    });
    
    voiceViz.addEventListener('mouseleave', () => {
        vizBars.forEach(bar => {
            bar.style.animationDuration = '1.5s';
            bar.style.background = 'linear-gradient(to top, #FF7B00, #FF9533)';
        });
    });
}

// Setup scroll indicator
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!scrollIndicator) return;
    
    scrollIndicator.addEventListener('click', () => {
        const aiDemoSection = document.querySelector('.ai-demo-section');
        if (aiDemoSection) {
            aiDemoSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Add click animation
        scrollIndicator.style.transform = 'translateX(-50%) scale(0.9)';
        setTimeout(() => {
            scrollIndicator.style.transform = 'translateX(-50%) scale(1)';
        }, 200);
    });
}

// Start background animations
function startBackgroundAnimations() {
    // Animate floating elements on mouse move
    document.addEventListener('mousemove', (e) => {
        const floatingElements = document.querySelectorAll('.float-element');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Parallax effect for background layers
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const bgLayers = document.querySelectorAll('.bg-layer');
        bgLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.3;
            layer.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
        
        // Fade out hero content on scroll
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const opacity = Math.max(0, 1 - scrolled / (window.innerHeight * 0.8));
            heroContent.style.opacity = opacity;
        }
    });
}

// Enhanced button interactions
function setupEpicButtons() {
    const epicBtns = document.querySelectorAll('.epic-btn, .epic-btn-secondary');
    
    epicBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // Add magnetic effect
            btn.style.transform = 'scale(1.05)';
            
            // Start shine animation
            const shine = btn.querySelector('.btn-shine');
            if (shine) {
                shine.style.left = '100%';
                setTimeout(() => {
                    shine.style.left = '-100%';
                }, 600);
            }
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
        
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.98)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1.05)';
        });
    });
}

// Logo interaction effects
function setupLogoEffects() {
    const logoHero = document.querySelector('.logo-hero');
    const logoContainer = document.querySelector('.hero-logo-container');
    
    if (!logoHero || !logoContainer) return;
    
    logoContainer.addEventListener('mouseenter', () => {
        logoHero.style.transform = 'scale(1.1) rotate(5deg)';
        logoHero.style.filter = 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))';
        
        // Activate logo particles
        const particles = document.querySelectorAll('.logo-particle');
        particles.forEach(particle => {
            particle.style.animationDuration = '1s';
        });
    });
    
    logoContainer.addEventListener('mouseleave', () => {
        logoHero.style.transform = 'scale(1) rotate(0deg)';
        logoHero.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))';
        
        // Reset logo particles
        const particles = document.querySelectorAll('.logo-particle');
        particles.forEach(particle => {
            particle.style.animationDuration = '2s';
        });
    });
    
    logoContainer.addEventListener('click', () => {
        // Easter egg: logo explosion effect
        createLogoExplosion();
    });
}

// Create logo explosion effect (easter egg)
function createLogoExplosion() {
    const logoContainer = document.querySelector('.hero-logo-container');
    if (!logoContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const spark = document.createElement('div');
        spark.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #FF7B00;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            pointer-events: none;
            animation: logoSpark 1s ease-out forwards;
        `;
        
        const angle = (i / 20) * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        spark.style.setProperty('--end-x', endX + 'px');
        spark.style.setProperty('--end-y', endY + 'px');
        
        logoContainer.appendChild(spark);
        
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
    
    // Add spark animation
    if (!document.getElementById('sparkAnimation')) {
        const sparkStyles = document.createElement('style');
        sparkStyles.id = 'sparkAnimation';
        sparkStyles.textContent = `
            @keyframes logoSpark {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(sparkStyles);
    }
}

// Initialize typewriter effect for title
function initializeTypewriter() {
    const titleLines = document.querySelectorAll('.title-line-1, .title-line-2 .gradient-text');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 1000 + 2000);
    });
}

// Setup trust indicators interaction
function setupTrustIndicators() {
    const trustItems = document.querySelectorAll('.trust-item');
    
    trustItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%);
                border-radius: 25px;
                top: 0;
                left: 0;
                animation: trustRipple 0.6s ease-out;
                pointer-events: none;
            `;
            
            item.style.position = 'relative';
            item.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const rippleStyles = document.createElement('style');
    rippleStyles.textContent = `
        @keyframes trustRipple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyles);
}

// Initialize all brutal hero effects
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeBrutalHero();
        setupEpicButtons();
        setupLogoEffects();
        setupTrustIndicators();
        // initializeTypewriter(); // Uncomment if you want typewriter effect
    }, 500);
});

// Add performance optimization
function optimizeAnimations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.documentElement.style.setProperty('--animation-duration', '0.5s');
        
        // Disable some heavy animations
        const heavyAnimations = document.querySelectorAll('.bg-layer, .float-element');
        heavyAnimations.forEach(element => {
            element.style.animation = 'none';
        });
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        const animatedElements = document.querySelectorAll('[style*="animation"]');
        animatedElements.forEach(element => {
            if (document.hidden) {
                element.style.animationPlayState = 'paused';
            } else {
                element.style.animationPlayState = 'running';
            }
        });
    });
}

// Initialize performance optimizations
setTimeout(optimizeAnimations, 1000);

// ===== MODAL FUNCTIONALITY =====

// Show login modal - GLOBAL
window.showLoginModal = function() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate modal entrance
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'translateY(50px) scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modalContent.style.transition = 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
            modalContent.style.transform = 'translateY(0) scale(1)';
            modalContent.style.opacity = '1';
        }, 100);
    }
}

// Close login modal - GLOBAL
window.closeLoginModal = function() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'translateY(50px) scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 400);
    }
}

// Handle login form submission - GLOBAL
window.handleLoginSubmit = function(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    
    // Show loading state
    const submitBtn = form.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Iniciando sesión...';
    submitBtn.disabled = true;
    
    // Simulate login process
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success and close modal
        showNotification('¡Bienvenido a B-INN!', 'success');
        closeLoginModal();
        
        // Redirect to main app
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    }, 2000);
}

// Social login functions - GLOBAL
window.signInWithGoogle = function() {
    showNotification('Redirigiendo a Google...', 'info');
    
    // Simulate Google login
    setTimeout(() => {
        showNotification('¡Bienvenido a B-INN!', 'success');
        closeLoginModal();
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    }, 2000);
}

window.signInWithFacebook = function() {
    showNotification('Redirigiendo a Facebook...', 'info');
    
    // Simulate Facebook login
    setTimeout(() => {
        showNotification('¡Bienvenido a B-INN!', 'success');
        closeLoginModal();
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    }, 2000);
}

window.showSignup = function() {
    // For now, just show a message
    showNotification('Función de registro próximamente', 'info');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const loginModal = document.getElementById('loginModal');
    const voiceModal = document.getElementById('voiceModal');
    
    if (e.target === loginModal) {
        closeLoginModal();
    }
    
    if (e.target === voiceModal) {
        closeVoiceDemo();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLoginModal();
        closeVoiceDemo();
    }
});

// Enhanced notification system for landing page
function showNotification(message, type = 'info', duration = 3000) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.landing-notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = `landing-notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icons[type] || icons.info}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-size: 0.95rem;
        font-weight: 600;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 400);
    }, duration);
}

function getNotificationColor(type) {
    const colors = {
        success: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
        error: 'linear-gradient(135deg, #dc3545 0%, #e74c3c 100%)',
        warning: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
        info: 'linear-gradient(135deg, #0052A1 0%, #3399FF 100%)'
    };
    return colors[type] || colors.info;
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user should see login modal on load
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showLogin') === 'true') {
        setTimeout(() => {
            showLoginModal();
        }, 1000);
    }
});

// Fix logo visibility issue
function fixLogoVisibility() {
    const logo = document.querySelector('.logo-hero');
    if (logo) {
        // Force logo to be visible
        logo.style.display = 'block';
        logo.style.opacity = '1';
        logo.style.visibility = 'visible';
        
        // Check if image loads
        logo.addEventListener('load', () => {
            console.log('Logo loaded successfully');
        });
        
        logo.addEventListener('error', () => {
            console.error('Logo failed to load');
            // Try alternative logo path
            logo.src = 'image/logo.png';
        });
        
        // Force reload if needed
        if (!logo.complete) {
            logo.src = logo.src + '?' + new Date().getTime();
        }
    }
}

// Initialize logo fix
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(fixLogoVisibility, 500);
});