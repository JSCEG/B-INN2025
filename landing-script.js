// ===== LANDING PAGE JAVASCRIPT =====

// DOM Elements
const voiceModal = document.getElementById('voiceModal');
const recordBtn = document.getElementById('recordBtn');
const voiceStatus = document.getElementById('voiceStatus');

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

// Voice demo functions
function startVoiceDemo() {
    voiceModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal entrance
    const modalContent = document.querySelector('.voice-modal-content');
    modalContent.style.transform = 'scale(0.8) translateY(50px)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modalContent.style.transition = 'all 0.4s ease';
        modalContent.style.transform = 'scale(1) translateY(0)';
        modalContent.style.opacity = '1';
    }, 100);
    
    // Start voice waves animation
    startVoiceWaves();
}

function closeVoiceDemo() {
    const modalContent = document.querySelector('.voice-modal-content');
    modalContent.style.transform = 'scale(0.8) translateY(50px)';
    modalContent.style.opacity = '0';
    
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
            window.location.href = 'index.html?category=oficinas';
        }, 500);
    }, 1500);
}

// Navigation functions
function scrollToSpaces() {
    const searchSection = document.getElementById('search-spaces');
    if (searchSection) {
        searchSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function navigateToSpaces(category = 'all') {
    // Store the selected category and navigate
    localStorage.setItem('selectedCategory', category);
    window.location.href = 'index.html';
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
    window.location.href = `index.html?${searchParams.toString()}`;
}

function toggleVoiceSearch() {
    startVoiceDemo();
}

function showLoginModal() {
    // Navigate to main app and trigger login modal
    window.location.href = 'index.html?showLogin=true';
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
            <img src="image/logo.png" alt="BE INN" style="height: 80px; filter: brightness(0) invert(1); margin-bottom: 24px; animation: pulse 2s infinite;">
            <div style="font-size: 1.2rem; font-weight: 600;">Cargando experiencia BE INN...</div>
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
showLoadingScreen();//
 ===== EARNINGS CALCULATOR FUNCTIONALITY =====

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

function calculateEarnings() {
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
            text: "La IA de BE INN maneja todo automáticamente. Yo solo recibo los pagos cada mes.",
            author: "María González"
        },
        {
            text: "Mis clientes siempre quedan satisfechos con la calidad del servicio. BE INN me ayuda a mantener 5 estrellas.",
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
        window.location.href = 'index.html?becomeOuter=true';
    }, 1500);
}

// Add click handler to become outer button
document.addEventListener('DOMContentLoaded', function() {
    const becomeOuterBtn = document.querySelector('.become-outer-btn');
    if (becomeOuterBtn) {
        becomeOuterBtn.addEventListener('click', handleBecomeOuter);
    }
});