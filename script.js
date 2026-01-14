document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Mobile Menu Toggle
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 1. Check LocalStorage for saved preference
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme if 'dark'
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // 2. Toggle Event Listener
    themeBtn.addEventListener('click', () => {
        // Toggle class
        body.classList.toggle('dark-mode');

        // Save preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // 3. ScrollReveal Initialization
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1000,
        reset: false       // Animations reveal only once
    });

    // Reveal Rules
    sr.reveal('.logo, .nav-links li, #theme-btn', { interval: 100 });
    sr.reveal('#hero h1', { delay: 200, origin: 'left' });
    sr.reveal('.greeting', { delay: 100, origin: 'bottom' });
    sr.reveal('.cta-btn', { delay: 400, origin: 'bottom' });
    sr.reveal('.section-title, #sobre h2, #habilidades h2, #projetos h2', { origin: 'left' });
    sr.reveal('#sobre p', { delay: 200 });
    sr.reveal('.skill-category', { interval: 200, origin: 'bottom' });
    sr.reveal('.project-card', { interval: 200, origin: 'bottom' });
});
