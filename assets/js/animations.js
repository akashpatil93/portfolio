// Navbar Animation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add background and shadow when scrolling down
    if (currentScroll > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }

    lastScroll = currentScroll;
});

// Project Card Hover Animation
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', (e) => {
        card.style.transform = 'translateY(0)';
    });
});

// Button Hover Effects
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
        button.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseleave', (e) => {
        button.style.transform = 'translateY(0)';
    });
});

// Typing Animation for Hero Section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing animation to taglines when page loads
window.addEventListener('load', () => {
    const primaryTagline = document.querySelector('.primary-tagline');
    const secondaryTagline = document.querySelector('.secondary-tagline');
    
    setTimeout(() => {
        typeWriter(primaryTagline, primaryTagline.textContent);
        setTimeout(() => {
            typeWriter(secondaryTagline, secondaryTagline.textContent, 30);
        }, 2000);
    }, 500);
});

// Fade-in animation for sections
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});