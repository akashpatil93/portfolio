// DOM Elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalProblem = document.getElementById('modal-problem');
const modalRole = document.getElementById('modal-role');
const modalActions = document.getElementById('modal-actions');
const modalImpact = document.getElementById('modal-impact');
const closeModalBtn = document.querySelector('.close-modal');
const navLinks = document.querySelectorAll('.nav-links a');
const projectCards = document.querySelectorAll('.project-card');

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal Functionality
function openModal(data) {
    modalTitle.textContent = data.title;
    modalCompany.textContent = data.company;
    modalProblem.textContent = data.problem;
    modalRole.textContent = data.role;
    modalActions.textContent = data.actions;
    modalImpact.textContent = data.impact;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

// Event Listeners for Modal
projectCards.forEach(card => {
    const viewButton = card.querySelector('.view-case-study');
    viewButton.addEventListener('click', () => {
        const projectData = {
            title: card.dataset.title,
            company: card.dataset.company,
            problem: card.dataset.problem,
            role: card.dataset.role,
            actions: card.dataset.actions,
            impact: card.dataset.impact
        };
        openModal(projectData);
    });
});

closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Intersection Observer for Section Animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('section-hidden');
    sectionObserver.observe(section);
});