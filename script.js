// Image Modal for Projects
const projectImages = document.querySelectorAll('.project-card img');

// Create modal elements
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.style.display = 'none';
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <img src="" alt="Expanded Project" class="modal-img">
  </div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-img');
const closeModal = modal.querySelector('.close-modal');

projectImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalImg.src = '';
    }
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Immediate page load animations for header and hero
document.addEventListener('DOMContentLoaded', () => {
    // Header animations
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');
    
    header.classList.add('animate-in');
    setTimeout(() => logo.classList.add('animate-in'), 200);
    setTimeout(() => navLinks.classList.add('animate-in'), 400);
    
    // Hero section animations
    const heroTexts = document.querySelectorAll('.hero-text h1, .hero-text h2, .hero-text p');
    heroTexts.forEach((text, index) => {
        setTimeout(() => text.classList.add('animate-in'), 600 + (index * 200));
    });
    
    // Skills section animations (page load)
    setTimeout(() => {
        const skillsHeader = document.querySelector('.skills-section h2');
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillsHeader.classList.add('animate-in');
        skillCards.forEach((card, index) => {
            setTimeout(() => card.classList.add('animate-in'), 200 + (index * 150));
        });
    }, 1400);
    
    // Footer animations (page load)
    setTimeout(() => {
        const copyright = document.querySelector('.copyright');
        const credit = document.querySelector('.credit');
        
        copyright.classList.add('animate-in');
        setTimeout(() => credit.classList.add('animate-in'), 200);
    }, 2400);
});

// Scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Elements to animate on scroll with specific animation types
const animatedElements = [
    { selector: '.projects-section h2', animation: 'fade-up' },
    { selector: '.projects-hint', animation: 'fade-up' },
    { selector: '.project-card', animation: 'fade-up' },
    { selector: '.contact-section h2', animation: 'fade-up' },
    { selector: '.social-links', animation: 'fade-up' },
    { selector: '.social-link', animation: 'fade-up' }
];

// Observe all animated elements
animatedElements.forEach(({ selector, animation }) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.classList.add('scroll-animate', animation);
        observer.observe(element);
    });
});

// Special handling for skill cards and project cards (staggered animation)
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');

skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Social links staggered animation
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.2}s`;
});

 